<script>
  import { Page, Block, Button, Tab, Tabs } from "framework7-svelte";
  export let f7router;
  export let f7route;

  import { onMount } from 'svelte';
  import { getCurrentUser, is_user_logged } from '../lib/firebase_auth.js';

  onMount(async () => {
    if(await getCurrentUser() != null){ // User is already logged in
      f7router.navigate("/homepage/");  
    }
  })
</script>

<Page name="home">
  <Block>
    <div class="vertical_center">
      <div class="text-align-center">
        <img src="/home-qr.png" alt="home-qr" width="300" height="300">
      </div>
      <div class="text-align-center">
        <h1 style="padding-top: 10%;">Aggiungi le tue piante</h1>
        <div style="color:gray">
          <h4>Coltiva tutte le piante presenti nel nostro sistema o aggiungine di nuove</h4>

        </div>
      </div>
      <Button fill href="/home2/">Avanti</Button>
    </Block>  
</Page>

<style>
  .vertical_center {
    padding-top: 40%;
  }
</style>