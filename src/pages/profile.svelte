<Page name="home">
    <div class="rectangle">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="freccia">
          <a class="link" href="/">
            <img src="/freccio.png" alt="freccio" width="75%">
          </a>
        </div>
        <div class="center">
            <img src="/foto_profile.png" alt="foto_profile" width="120" height="120">
            <div style="color:#ffffff;">
                <h1>Ciro Esposito</h1>
                <h4 class="subtitle"><img src="/segnaposto.png" alt="segnaposto" width="15" height="15">  200 piante piantate</h4>
            </div>
        </div>
    </div>
    <Block>
        <!-- piantine -->
        <div class="grid grid-cols-2">
            <img src="/cacatus_rosso.png" alt="cacatus_rosso" width="140" height="140">
            <div>
                <h2>Basilico</h2>
                <div class="grid grid-cols-2">
                    <div>
                        <h5 class="infobox" style="color:gray">Temp. media</h5>
                        <h5 class="infobox">19</h5>
                    </div>
                    <div>
                        <h5 class="infobox" style="color:gray">Umidità media</h5>
                        <h5 class="infobox">60%</h5>
                    </div>
                </div>
                <div>
                    <h5 class="infobox" style="color:gray">Giorni impiegati per crescere</h5>
                    <h5 class="infobox">25</h5>
                </div>
            </div>
        </div>

        <!-- piantine -->
        <div class="grid grid-cols-2">
            <img src="/cacatus_rosso.png" alt="cacatus_rosso" width="140" height="140">
            <div>
                <h2>Basilico</h2>
                <div class="grid grid-cols-2">
                    <div>
                        <h5 class="infobox" style="color:gray">Temp. media</h5>
                        <h5 class="infobox">19</h5>
                    </div>
                    <div>
                        <h5 class="infobox" style="color:gray">Umidità media</h5>
                        <h5 class="infobox">60%</h5>
                    </div>
                </div>
                <div>
                    <h5 class="infobox" style="color:gray">Giorni impiegati per crescere</h5>
                    <h5 class="infobox">25</h5>
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
  .center {
    position: relative;
    top: -520px;
    text-align: center;
  }

  .rectangle {
    width: 100%;
    height: 280px;
    background-color: rgba(97, 210, 196, 1);
  }

  .circle1 {
    position: relative;
    left: 110px;
    top: -60px;
    height: 320px;
    width: 320px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .circle2 {
    position: relative;
    left: 280px;
    top: -180px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .subtitle{
    position: relative;
    top: -18px;
  }

  .infobox {
    margin-top: -14px;
  }

  .freccia {
    position: relative;
    top: -460px;
    width: 10%;
    height: 20%;
    padding-left: 5%;
  }
</style>