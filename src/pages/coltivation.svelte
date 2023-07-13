<Page name="home">

    <!-- blocco verde -->
    
    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia">
        <h1>Coltiva Basilico</h1>
    </div>

    <!-- bottoni -->

    <div class="container">

        <div style="display: flex; flex-wrap: wrap;">
            <button class="button button-outline">Button</button>
            <button class="button button-outline">Button</button>
            <button class="button button-outline">Button</button>
            <button class="button button-outline">Button</button>
            <button class="button button-outline">Button</button>
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
        margin: 0;
        position: relative;
        top: 50%;
        right: 10px;

    }
    .container-green{
        /* background-image: linear-gradient(to right,rgba(97, 210, 196, 1), rgba(41, 216, 144, 1)); */
        height: 180px;
        display: flex;
        align-items: left;
        background-color: #272635;
        
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
    
    

</style>

