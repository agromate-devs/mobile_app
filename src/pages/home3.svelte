<script>
  import { Page, Block, Button } from "framework7-svelte";
</script>

<Page name="home">
  <Block>
    <div class="vertical_center">
      <div class="text-align-center">
        <img
          src="/home-ragazza-tablet.png"
          alt="home-ragazza-tablet"
          width="380"
          height="320"
        />
      </div>
      <div class="text-align-center">
        <h1 style="padding-top: 15%;">Monitora il tuo orto</h1>
        <div style="color:gray">
          <h4>
            Monitora i parametri del tuo orto comodamente dal tuo smartphone
          </h4>
        </div>
      </div>
    </div>

    <Button fill href="/login/">Avanti</Button>
  </Block>
</Page>

<style>
  .vertical_center {
    padding-top: 30%;
  }
</style>
