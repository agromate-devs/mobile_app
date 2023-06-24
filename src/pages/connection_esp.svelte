<Page name="home">

    <!-- blocco verde -->
    
    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia">
        <h1>Connessione</h1>
    </div>

    <!-- elenco esp -->

    <div class="container-esp">

        <div class="block1">
            <h5>86%</h5>
            <h4>Potenza segnale</h4>
            <h2>AgroSmart v1</h2>
            <div class="block2">
                <img src="/agrosmart.png" alt="photo">
                <div class="block3">
                    <button>Connetti</button>

                </div>
            </div>
        </div>
        
    </div>
    <div class="container-esp">

        <div class="block1">
            <h5>86%</h5>
            <h4>Potenza segnale</h4>
            <h2>AgroSmart v1</h2>
            <div class="block2">
                <img src="/agrosmart.png" alt="photo">
                <div class="block3">
                    <button>Connetti</button>

                </div>
            </div>
        </div>
        
    </div>
    <div class="container-esp">

        <div class="block1">
            <h5>86%</h5>
            <h4>Potenza segnale</h4>
            <h2>AgroSmart v1</h2>
            <div class="block2">
                <img src="/agrosmart.png" alt="photo">
                <div class="block3">
                    <button>Connetti</button>

                </div>
            </div>
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
        top: 3px;
        position: sticky;
    }
    .container-esp{
        display: flex;
        align-items: left;
        justify-content: left;
        flex-direction: row;
        
    }
    .block1{
        display: flex;
        flex-direction: row-reverse;
        margin-top: 40px;
        margin-left: 20px;
    }
    img{
        width: 90px;
        height: 90px;
    }
    h2{
        position: relative;
        bottom: 24px;
        margin-left: 15px;
        color: #36455A;
    }
    h4{
        color: #A1A8B9;
        position: relative;
        top: 2vh;
        right: 15vh;
    }
    h5{
        font-size: 16px;
        color: #36455A;
        position: relative;
        top: 37px;
        right: 62%;
    }
    button{
        background-color: #2DDA93;
        color: white;
        height: 38px;
        width: 100px;
        position: relative;
        border-radius: 5px;
        left: 30vh;
        bottom: 6vh;
        font-size: 16px;
    }

</style>

