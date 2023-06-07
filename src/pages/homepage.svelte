<Page name="home">       <!-- manca la parte sotto -->
    <!-- navbar -->
    <div class="rectangle_nav">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="freccia">
        </div>
        <div class="left">
          <h1>Hello Ciro</h1>
          <h4 style="margin-top: -6%;">Scegli la pianta che preferisci</h4>
        </div>
        <div class="profile_image">
          <img src="/foto-profile.png" alt="foto-profile" width="70px" height="70px">
        </div>

        <!-- searchbar cambiare colore-->
        <div class="search_bar">
          <form class="searchbar">
              <div class="searchbar-input-wrap">
                <input type="search" placeholder="Search For Plants"/>
                <i class="searchbar-icon"></i>
                <span class="input-clear-button"></span>
              <span class="searchbar-disable-button">Cancel</span>
            </div>
          </form>
        </div>
    </div>
    <Block>
        <!-- button -->
        <div class="button_poisition">
          <div class="grid grid-cols-3">

            <div class="rectangle">
              <div class="center">
                <img src="/home-fotocamera.png" alt="homa-fotocamera" class="image_change_color">
                <h5 class="button_text">Esplora</h5>
              </div>
            </div>

            <div class="rectangle">
              <div class="center" style="padding-top: 10%;">
                <img src="/home-foglia.png" alt="homa-fotocamera" class="image_change_color" style="width: 45%;">
                <h5 class="button_text" style="margin-top: -12%;">Monitora</h5>
              </div>
            </div>

            <div class="rectangle">
              <div class="center">
                <img src="/home-libro.png" alt="homa-fotocamera" class="image_change_color">
                <h5 class="button_text">I tuoi dispositivi</h5>
              </div>
            </div>

          </div>
        </div>

        <h1 style="margin-left: 4%; margin-bottom: -2%; margin-top: 8%;">Piante</h1>
        <!-- card fare il side scroll-->
        <div>
          <!-- card-basilico -->
          <div class="card">
            <img src="/homepage-card-basilico.png" alt="homepage-card-basilico" height="100%" width="100%">
            <div class="card_text">
              <h1>Basilico</h1>
            </div>
          </div>
        </div>
    </Block>
</Page>

<script>
    export let f7router;

  import {
    Page,
    Block,
    Navbar,
    Toolbar,
    Button
  } from 'framework7-svelte';
  import { onMount } from 'svelte';
  import { getCurrentUser } from '../lib/firebase_auth.js';

  onMount(async () => {
    if((await getCurrentUser()).email != null){ // User is already logged in
      f7router.navigate("/main/");  
    }
  })
</script>

<style>
  .left {
    position: relative;
    top: -330px;
    text-align: left;
    padding-left: 5%;
    color:#ffffff;
  }

  .rectangle_nav {
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
    top: -390px;
    padding-left: 5%;
    padding-right: 5%;
  }

  .profile_image {
    position: relative;
    top: -410px;
    text-align: right;
    padding-right: 5%;
  }

  .center {
    text-align: center;
    position: relative;
    padding-top: 14%;
  }

  .button_poisition {
    margin-top: 20%;
    padding-left: 0%;
  }

  .card {
    width: 90%;
    height: 180px;
  }

  .card_text {
    margin-top: -25%;
    padding-left: 5%;
    color: #ffffff;
  }

  .button_text {
    margin-top: -4%;
    color: #ffffff;
    /* color: #000000; */
  }

  .rectangle {
    width: 90%;
    height: 90px;
    /* background-color: #ffffff; */
    background-color: #2DDA93;
    border-radius: 4%;
    margin-left: 5%;
    box-shadow: 4px 4px 20px #2DDA93;
  }

  .image_change_color {
    width: 30%;
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(251deg) brightness(1100%) contrast(103%);
  }
</style>