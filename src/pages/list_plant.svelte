<script>
  import PiantaItem from "./PiantaItem.svelte";

  export let f7router;

  import { Page, Block, Navbar, Button } from "framework7-svelte";
  import { onMount } from "svelte";
  import { getCurrentUser } from "../lib/firebase_auth.js";

  onMount(async () => {
    if ((await getCurrentUser()).email != null) {
      // User is already logged in
      f7router.navigate("/main/");
    }
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
      <h1>Cacatus</h1>
    </div>

    <!-- searchbar cambiare colore-->
    <div class="search_bar">
      <form class="searchbar">
        <div class="searchbar-input-wrap">
          <input type="search" placeholder="Search" />
          <i class="searchbar-icon" />
          <span class="input-clear-button" />
          <span class="searchbar-disable-button">Cancel</span>
        </div>
      </form>
    </div>
  </div>
  <Block>
    <!-- piantine -->
    <PiantaItem temp={19} hum={60} days={25} img="/cacatus_rosso.png" />

    <!-- piantine -->
    <PiantaItem temp={19} hum={60} days={25} img="/cacatus_rosso.png" />
  </Block>
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
    background-color: rgba(97, 210, 196, 1);
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
