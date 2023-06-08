<script>
    export let temp, hum, days, img;
    import { onMount } from "svelte";
</script>

<div class="grid grid-cols-2">
    <img
        src={img}
        alt="cacatus_rosso"
        width="140"
        height="140"
    />
    <div>
        <h2>Basilico</h2>
        <div class="grid grid-cols-2">
            <div>
                <h5 class="infobox" style="color:gray">Temp. media</h5>
                <h5 class="infobox">{temp}</h5>
            </div>
            <div>
                <h5 class="infobox" style="color:gray">Umidità media</h5>
                <h5 class="infobox">{hum}%</h5>
            </div>
        </div>
        <div>
            <h5 class="infobox" style="color:gray">
                Giorni impiegati per crescere
            </h5>
            <h5 class="infobox">{days}</h5>
        </div>
    </div>
</div>

<style>

    .infobox {
        margin-top: -14px;
    }
</style>
