<script lang="ts">
  export let f7router;

  import PiantaItem from "./PiantaItem.svelte";
  import { Page, Block, List, ListItem } from "framework7-svelte";
  import Navbar from "./Navbar.svelte";
  import { selected_family } from "../js/store";
  import { onMount } from "svelte";
  import { DBContext } from "../db/DBContext";
  import { capitalize, page_panic } from "../lib/helper";
  import viewport from "src/lib/viewport";
  
  const PLANTS_DB = new DBContext();
  let plants = [];

  function ph_media(ph1: string, ph2: string) {
    let media = (+ph1 + +ph2) / 2; // Cast ph1 and ph2 to string and do media. Very bad to read with unary operators, I know.
    if (media == 0) return "?";
    else return media;
  }

  function growth_rate_to_about_days(growth_rate: string) {
    switch (growth_rate) {
      case "Rapid":
        return "7";
      case "Moderate":
        return "7-20";
      default:
        return "?";
    }
  }

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
          <PiantaItem
            temp={plant.temperatureMinimumF == ""
              ? "?"
              : plant.temperatureMinimumF}
            ph={ph_media(plant.pHMinimum, plant.pHMaximum)}
            days={growth_rate_to_about_days(plant.growthRate)}
            name={capitalize(plant.commonName)}
          />
        {:else}
          <!-- piantine -->
          <PiantaItem
            temp={plant.temperatureMinimumF == ""
              ? "?"
              : plant.temperatureMinimumF}
            ph={ph_media(plant.pHMinimum, plant.pHMaximium)}
            days={growth_rate_to_about_days(plant.growthRate)}
            name={plant.scientificNameX}
          />
        {/if}
      {/each}
    <!-- </List> -->
  </Block>
</Page>
