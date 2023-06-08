<Page name="home">
    <!-- navbar -->
    <div class="rectangle">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="freccia">
          <a class="link" href="/">
            <img src="/freccio.png" alt="freccio" width="75%">
          </a>
        </div>
        <div class="left">
          <h1>Esplora</h1>
        </div>

        <!-- searchbar cambiare colore-->
        <div class="search_bar">
          <form class="searchbar">
              <div class="searchbar-input-wrap">
                <input type="search" placeholder="Cerca una specie"/>
                <i class="searchbar-icon"></i>
                <span class="input-clear-button"></span>
              <span class="searchbar-disable-button">Cancel</span>
            </div>
          </form>
        </div>
    </div>
    <Block>
      <div class="list">
        <div class="list-group">
          <ul>
            <li class="alphabet_list">A</li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Aaron </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Abbie</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Adam</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-group">
          <ul>
            <li class="alphabet_list">B</li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Bailey</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Barclay</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Bartolo</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-group">
          <ul>
            <li class="alphabet_list">C</li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Caiden</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Calvin</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Candy</div>
                </div>
              </div>
            </li>
          </ul>
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
    top: -280px;
    text-align: left;
    padding-left: 5%;
    color:#ffffff;
  }

  .rectangle {
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to right,rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
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

  .alphabet_list {
    color: #2DDA93;
    padding-left: 2%;
    font-size: 120%;
    margin-bottom: -2%;
    font-weight: 900;
  }
</style>