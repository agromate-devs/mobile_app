<Page name="home">

    <!-- blocco verde -->
    
    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia">
        <h1>Connessione</h1>
    </div>

    <!-- elenco esp -->

    {#each wifi as net}
        <div class="container-esp">

            <div class="block1">
                <h5>{net.level}</h5>
                <h4>RSSI:</h4>
                <h2>{net.SSID}</h2>
                <div class="block2">
                    <img src="/agrosmart.png" alt="photo">
                    <div class="block3">
                        <button>Connetti</button>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</Page>

<script>
    import { Page } from 'framework7-svelte';
    import { CapacitorWifi } from 'capacitorjs-plugin-wifi';

    let wifi = [];

    async function checkPermissionResult() {
    let result = await CapacitorWifi.checkPermission();
    if(result.status != "true") {
        CapacitorWifi.requestPermission();
    }
  }

    async function scanWifiResult() {
        await checkPermissionResult();
        let result = await CapacitorWifi.wifiScan();
        wifi = result.networks;
    }

    scanWifiResult();

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
        right: 14vh;
    }

    h5{
        font-size: 16px;
        color: #36455A;
        position: relative;
        top: 37px;
        right: 56%;
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

