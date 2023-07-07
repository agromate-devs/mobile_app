<script lang="ts">
  export let f7router;

  import PiantaItem from "./PiantaItem.svelte";
  import { Page, Block } from "framework7-svelte";
  import Navbar from "./Navbar.svelte";
  import { selected_family, selected_plant_scientific_name, selected_plant_name, selected_plant_photo } from "../lib/store";
  import { onMount } from "svelte";
  import { DBContext } from "../db/DBContext";
  import { capitalize, growth_rate_to_about_days, page_panic, ph_media } from "../lib/helper";
  import { get_plant_photo } from "../lib/wikipedia";

  const PLANTS_DB = new DBContext();
  let plants = [];

  onMount(async () => {
    await PLANTS_DB.init_capacitor_sqlite_plugin(); // Init web store and jeep sqlite
    if (!(await PLANTS_DB.is_database_saved())) {
      // If database is not saved in store we can't do anything in this page so abort and emit error
      page_panic("Database non inizializzato. ", f7router);
    }
    await PLANTS_DB.init_db(); // Create database on TypeORM

    if ($selected_family == "" || $selected_family == null) {
      page_panic("Nessuna famiglia presente nello store.", f7router);
    }

    plants = await PLANTS_DB.get_plants_by_family($selected_family);
  });

  async function select_plant(name: string, sci_name: string) {
    $selected_plant_name = name;
    $selected_plant_photo = await get_plant_photo(name);
    $selected_plant_scientific_name = sci_name
    f7router.navigate("/plant/");
  }
</script>

<Page name="home">
  <Navbar title={$selected_family} search_bar_placeholder="Cerca una pianta" />

  <Block>
    <!-- <List strongIos outlineIos dividersIos class="searchbar-not-found">
      <ListItem title="Nothing found" />
    </List> -->

    <br />
    <!-- <List class="search-list searchbar-found"> -->
    {#each plants as plant}
      {#if plant.commonName != ""}
        <!-- piantine -->
        <div on:click={() => select_plant(plant.commonName, plant.scientificNameX)} on:keypress={() => {}}>
          <PiantaItem
            temp={plant.temperatureMinimumF == ""
              ? "?"
              : plant.temperatureMinimumF}
            ph={ph_media(plant.pHMinimum, plant.pHMaximum)}
            days={growth_rate_to_about_days(plant.growthRate)}
            name={capitalize(plant.commonName)}
          />
        </div>
      {:else}
      <div on:click={() => select_plant(plant.scientificNameX, plant.scientificNameX)} on:keypress={() => {}}>

        <!-- piantine -->
        <PiantaItem
          temp={plant.temperatureMinimumF == ""
            ? "?"
            : plant.temperatureMinimumF}
          ph={ph_media(plant.pHMinimum, plant.pHMaximium)}
          days={growth_rate_to_about_days(plant.growthRate)}
          name={plant.scientificNameX}
        />
        </div>
      {/if}
    {/each}
    <!-- </List> -->
  </Block>
</Page>
