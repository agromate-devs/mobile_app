        <div>
          <!-- card-basilico -->
          <div class="card">
            <img src={img} alt="homepage-card-basilico" height="100%" width="100%">
            <div class="card_text">
              <h1>{text}</h1>
            </div>
          </div>
        </div>

<script>
  import ButtonHome from './ButtonHome.svelte';

    export let f7router;
    export let text, img;
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
      f7router.navigate("/homepage/");  
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

