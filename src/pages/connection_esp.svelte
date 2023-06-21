<Page name="home">

    <!-- blocco verde -->
    
    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia">
        <h1>Connessione</h1>
    </div>

    <!-- elenco esp -->

    <div class="container-esp">

        <div class="block">
            <h2>AgroSmart v1</h2>
            <img src="/agrosmart.png" alt="photo">
        </div>

    </div>
</Page>

<script>
    import {Page,Block,Navbar,Button} from 'framework7-svelte';
</script>


<style>

    h1{
        color: white;
        font-size: 35px;
        padding-left: 10px;
    }
    .container-green{
        background-image: linear-gradient(to right,rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
        height: 145px;
        display: flex;
        align-items: center;
        
    }
    #freccia{
        width: 35px;
        height: 35px;
        margin-left: 20px;
    }
    .container-esp{
        display: flex;
        align-items: left;
        justify-content: left;
        flex-direction: row;
        
    }
    img{
        width: 90px;
        height: 90px;
        margin-top: 40px;
    }
        



</style>

