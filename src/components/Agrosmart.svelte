<script>
    export let device_name, signal_level, sw_version, update_available;
    import { Button } from "framework7-svelte";
</script>

<!-- agrosmart -->
<div class="container">
    <div style="margin-top: 20px;">
        <img src="/agrosmart.png" alt="foto_profile" width="100" height="100" />
    </div>
    <div>
        <h1>{device_name}</h1>
        <div class="grid grid-cols-2 grid-gap">
            <div>
                <h4 class="infobox">Potenza segnale</h4>
                <h4 class="infobox">{signal_level}%</h4>
            </div>
            <div>
                <h4 class="infobox">Versione SW</h4>
                <h4 class="infobox">v{sw_version}</h4>
            </div>
        </div>
    </div>
</div>
{#if update_available}
    <Button fill>Aggiorna</Button>
{/if}

<style>
    .container {
        /* serve custom */
        display: grid;
        grid-template-columns: 35% 65%;
        grid-template-rows: auto;
    }
    .infobox {
        margin-top: -14px;
        color: gray;
    }
</style>
