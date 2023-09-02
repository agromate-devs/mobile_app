<Page name="home">

    <!-- blocco verde -->
    
    <CustomNavbar title="Coltiva basilico"></CustomNavbar>

    <!-- bottoni -->

    <Block>

        <div style="display: flex; flex-wrap: wrap; gap: 50px;">
            <Button href="/precipitazioni/" fill large>Precipitazioni</Button>
            <Button href="/umidita/" fill large>Umidità</Button>
            <!-- <Button  fill large>Ph del terreno</Button> -->
            <Button href="/temperature/" fill large>Temperatura</Button>
            <Button href="/illuminazione/" fill large>Illuminazione</Button>
        </div>
        <br />
        <br />

        <div class="grid grid-cols-2 grid-gap">
            <div><Button fill>Conferma</Button></div>
            <div><Button color="red" fill>Annulla</Button></div>
          </div>

        </Block>
    
    
</Page>

<script>
    import {Page,Block,Navbar,Button} from 'framework7-svelte';
    import CustomNavbar from '../components/CustomNavbar.svelte';
</script>

