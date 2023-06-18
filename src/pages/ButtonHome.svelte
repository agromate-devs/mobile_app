<script>
    export let text, img, href;
    import { Link } from "framework7-svelte";
</script>

<Link href={href}>
    <div class="rectangle">
        <div class="center">
            <img src={img} alt="homa-fotocamera" class="image_change_color" />
            <h5 class="button_text">{text}</h5>
        </div>
    </div>
</Link>

<style>
    .center {
        text-align: center;
        position: relative;
        padding-top: 14%;
    }

    .button_text {
        margin-top: -4%;
        color: #ffffff;
        /* color: #000000; */
    }

    .rectangle {
        width: 90%;
        height: 90px;
        /* background-color: #ffffff; */
        background-color: #2dda93;
        border-radius: 4%;
        margin-left: 5%;
        box-shadow: 4px 4px 20px #2dda93;
    }

    .image_change_color {
        width: 30%;
        filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(251deg)
            brightness(1100%) contrast(103%);
    }
</style>
