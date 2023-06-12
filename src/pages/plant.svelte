<script>
    import {
        Page,
        Searchbar,
        f7,
        Fab,
        FabButton,
        Icon,
        FabButtons,
        Button,
    } from "framework7-svelte";
    import {
        selected_plant_photo,
        selected_plant_name,
        selected_family,
        selected_plant_scientific_name
    } from "../js/store";
    import { onMount } from "svelte";
    import { get_plant_description } from "../lib/wikipedia";

    function go_back() {
        var view = f7.views.current;
        view.router.back(view.history[view.history.length - 2], {
            force: true,
        });
    }

    let plant_description = "";

    onMount(async () => {
        plant_description = await get_plant_description($selected_plant_name);
    })
</script>

<Page>
    <div class="rectangle" style="--image:url('{$selected_plant_photo}')">
        <div class="circle1" />
        <div class="circle2" />
        <div class="freccia">
            <a class="link" href="#0" on:click={() => go_back()}>
                <img src="/freccio.png" alt="freccio" width="75%" />
            </a>
        </div>

        <!-- searchbar cambiare colore-->
        <div class="search_bar">
            <Fab position="right-top" color="red">
                <Icon ios="f7:heart_fill" md="f7:heart_fill" />
            </Fab>
        </div>
    </div>
    <div class="info_container">
        <h1 class="plant_name">{$selected_plant_name}</h1>
        <div class="grid grid-cols-2 grid-gap">
            <div>
                <h2>Nome scientifco</h2>
                <p>{$selected_plant_scientific_name}</p>
            </div>
            <div>
                <h2>Famiglia</h2>
                <p>{$selected_family}</p>
            </div>
        </div>
        <h1 class="plant_name">Descrizione</h1>
        <p>{plant_description}</p>
        <div class="grid grid-cols-2 grid-gap btn_container">
            <div>
                <Button fill>Ordina semi</Button>
            </div>
            <div>
                <Button fill>Coltiva</Button>
            </div>
        </div>
    </div>
    
</Page>

<style>
    .rectangle {
        width: 100%;
        height: 300px;
        background-image: var(--image);
        /* background-repeat: no-repeat; */
        background-size: cover;
    }

    .freccia {
        /* position: relative;
        top: -300px; */
        width: 10%;
        height: 20%;
        padding-left: 3%;
        padding-top: 4%;
    }

    .search_bar {
        position: relative;
        top: 175px;
        padding-left: 5%;
        padding-right: 5%;
    }

    .info_container {
        padding-left: 5%;
    }
    
    .btn_container {
        padding-right: 5%;
    }
</style>
