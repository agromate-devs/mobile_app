<Page name="home">
    <Block>
      <div class="center">
        <img src="/home-qr.png" alt="home-qr" width="300" height="300">
      </div>
      <div class="BIG-text">
        <h1>Aggiungi le tue piante</h1>
        <div style="color:gray">
          <h4>Coltiva tutte le piante presenti nel nostro sistema o aggiungine di nuove</h4>
        </div>
      </div>
      <Button fill href="/profile/">Avanti</Button>
    </Block>
</Page>
<script>
      export let f7router;
    export let f7route;

  import {
    Page,
    Block,
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
  .center {
    padding-top: 40%;
    text-align: center;
  }

  .BIG-text {
    padding-top: 10%;
    text-align: center;
  }
</style>