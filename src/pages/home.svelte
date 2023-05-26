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
      <Button fill href="/updateincorso/">Avanti</Button>
    </Block>
</Page>
<script>
  import {
    Page,
    Block,
    Button
  } from 'framework7-svelte';
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