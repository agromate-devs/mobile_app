<Page name="home">

    <!-- blocco verde -->
    
    <CustomNavbar title="Coltiva basilico"></CustomNavbar>

    <!-- bottoni -->

    <div class="container">

        <div style="display: flex; flex-wrap: wrap; gap: 50px;">
            <button class="button button-outline">Precipitazioni</button>
            <button class="button button-outline">Umidità</button>
            <button class="button button-outline">Ph del terreno</button>
            <button class="button button-outline">Temperatura</button>
            <button class="button button-outline">Illuminazione</button>
        </div>

        <div style="display: flex; gap: 50px">
            <button class="button color-green" style= "with:150px; height: 50px; background-color: green; color: white; top: 120px;" >Conferma</button>
            <button class="button color-red"   style= "with:150px; height: 50px; background-color: red; color: white; top: 120px;" >Annulla</button>
        </div>

    </div>
    
    
</Page>

<script>
    import {Page,Block,Navbar,Button} from 'framework7-svelte';
    import CustomNavbar from '../components/CustomNavbar.svelte';
</script>


<style>
    .container{
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        padding-left: 25px;
        padding-top: 50px;
    }
    button{
        width: 150px;
        height: 100px;
        font-size: 20px;
    }
    
    

</style>

