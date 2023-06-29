<Page name="home">

    <!-- blocco verde -->
    
    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia">
        <h1>Coltiva Basilico</h1>
    </div>

    <!-- bottoni -->

    <div class="container">
        <button>Precipitazioni</button>
        <button>Umidità</button>
        <button>Ph del terreno</button>
        <button>Temperatura</button>
        <button>Illuminazione</button>
    </div>
    <div class="conferm">
        <button id="annulla" >Annulla</button>
        <button id="conferma" >continua</button>
    </div>
    
    
</Page>

<script>
    import {Page,Block,Navbar,Button} from 'framework7-svelte';
</script>


<style>

    h1{
        color: white;
        font-size: 35px;
        margin: 0;
        position: relative;
        top: 50%;
        right: 10px;

    }
    .container-green{
        background-image: linear-gradient(to right,rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
        height: 180px;
        display: flex;
        align-items: left;
        
    }
    #freccia{
        width: 35px;
        height: 35px;
        position: relative;
        top: 15%;
        left: 25px;
    }
    .container{
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        padding-left: 25px;
        padding-top: 50px;
    }
    button{
        width: 150px;
        height: 80px;
        border-radius: 20px;
        border: 5px solid rgba(97, 210, 196, 1);
        font-size: 16px;
    }
    .conferm{
        display: flex;
        justify-content: space-between;
        padding: 0 25px;
        padding-top: 50px;
        color: red;
        position: relative;
        top: 80px;
    }
    #annulla{
        background-color: red;
        border: none;
        border-radius: 10px;
        font-size: 20px;
    }
    #conferma{
        background-color: rgb(9, 231, 9);
        border: none;
        border-radius: 10px;
        font-size: 20px;    
    }
    

</style>

