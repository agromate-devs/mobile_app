<script lang="ts">
  import {
    Page,
    List,
    ListGroup,
    ListItem,
    ListIndex,
    Searchbar,
  } from "framework7-svelte";
  import { onMount } from "svelte";
  import { DBContext } from "../db/DBContext";
  import { f7 } from "framework7-svelte";

  const PLANTS_DB = new DBContext();
  let families = [];
  let letters = [];

  async function import_records() {
    const plants = (await (await fetch("usda_light.sql")).text()).split("\n");
    for (let index = 0; index < plants.length; index++) {
      await PLANTS_DB.query(plants[index]);
    }
  }

  async function import_schema() {
    const schema = await (await fetch("usda_tables.sql")).text();
    await PLANTS_DB.query(schema);
  }

  onMount(async () => {
    f7.dialog.preloader(
      "Caricamento Database in corso... L'operazione potrebbe richiedere qualche minuto"
    );
    await PLANTS_DB.init_capacitor_sqlite_plugin(); // Init web store and jeep sqlite
    if (!(await PLANTS_DB.is_database_saved())) {
      await PLANTS_DB.init_db(); // Create database on TypeORM
      await import_schema(); // Import schema
      await import_records(); // Import plants
      await PLANTS_DB.save_database(); // Save DB
    } else {
      await PLANTS_DB.init_db(); // Create database on TypeORM
    }
    families = await PLANTS_DB.get_all_plants(); // Get all families
    let unique_letters = new Set( // Get all unique letters of plants for the list
      families.map((family) => family.family.charAt(0))
    );
    letters = Array.from(unique_letters); // Svelte can't iterate a Set
    f7.dialog.close();
  });
</script>

<Page name="home">
  <!-- navbar -->
  <div class="rectangle">
    <div class="circle1" />
    <div class="circle2" />
    <div class="freccia">
      <a class="link" href="/">
        <img src="/freccio.png" alt="freccio" width="75%" />
      </a>
    </div>
    <div class="left">
      <h1>Esplora</h1>
    </div>

    <!-- searchbar cambiare colore-->
    <div class="search_bar">
      <Searchbar
        searchContainer=".search-list"
        searchIn=".item-title"
        placeholder="Cerca una specie"
      />
    </div>
  </div>
  <br />
  <List strongIos outlineIos dividersIos class="searchbar-not-found">
    <ListItem title="Nothing found" />
  </List>

  <ListIndex
    indexes="auto"
    listEl=".list.contacts-list"
    scrollList={true}
    label={true}
  />
  <List contactsList class="search-list searchbar-found">
    <ListGroup>
      <ListItem title="#" groupTitle />
      <ListItem title="Non categorizzate" />
    </ListGroup>
    {#each letters as letter}
      <!-- Remove empty block -->
      {#if letter != ""}
        <ListGroup>
          <ListItem title={letter} groupTitle />
          {#each families as family}
            {#if family.family.charAt(0) == letter}
              <ListItem title={family.family} />
            {/if}
          {/each}
        </ListGroup>
      {/if}
    {/each}
  </List>
</Page>

<style>
  .left {
    position: relative;
    top: -280px;
    text-align: left;
    padding-left: 5%;
    color: #ffffff;
  }

  .rectangle {
    width: 100%;
    height: 200px;
    background-image: linear-gradient(
      to right,
      rgba(97, 210, 196, 1),
      rgba(41, 216, 144, 1)
    );
  }

  .circle1 {
    position: relative;
    left: 190px;
    top: -60px;
    height: 220px;
    width: 220px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .circle2 {
    position: relative;
    left: 310px;
    top: -110px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .freccia {
    position: relative;
    top: -300px;
    width: 10%;
    height: 20%;
    padding-left: 5%;
  }

  .search_bar {
    position: relative;
    top: -290px;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
