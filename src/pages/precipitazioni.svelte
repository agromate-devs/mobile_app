<script>
    import {
        Navbar,
        Page,
        BlockTitle,
        Range,
        List,
        ListItem,
        Icon,
        ListButton,
        ListInput,
        Block,
    } from "framework7-svelte";
</script>

<Page name="home">
    <!-- blocco verde -->

    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia" />
        <h1 class="title">Precipitazioni</h1>
    </div>

    <div style="margin-left: 8%;">
        <h3>Quantità d’acqua in mm per giorno:</h3>

        <div class="number-input">
            <List strongIos dividersIos insetIos>
                <ListInput label="precipitazioni" type="url" placeholder="mm²" clearButton />
            </List>
        </div>
        
        <div>
            <List>
                <!-- Additional "checkbox" prop to enable checkbox list item -->
                <ListItem
                    checkbox
                    value="check_1"
                    checked
                    title="Notifiche in caso di terreno arido?"
                />
            </List>
        </div>

        <div>
            <List>
                <!-- Additional "checkbox" prop to enable checkbox list item -->
                <ListItem
                    checkbox
                    value="check_2"
                    checked
                    title="Innaffia quando il terreno è arrido?"
                />
            </List>
        </div>
    </div>

    <div>
        <div style="display: flex; justify-content: center;">
            <List>
                <ListButton
                    title="Conferma"
                    style="background-color: #2DDA93; color: white; width: 150px; "
                />
            </List>
        </div>
    </div>
</Page>

<style>
    .title {
        color: white;
        font-size: 35px;
        margin: 0;
        position: relative;
        top: 50%;
        right: 10px;
    }

    .number-input {
        margin-top: -5%;
        width: 45%;
    }

    .container-green {
        background-image: linear-gradient(
            to right,
            rgba(97, 210, 196, 1),
            rgba(41, 216, 144, 1)
        );
        height: 180px;
        display: flex;
        align-items: left;
    }

    #freccia {
        width: 35px;
        height: 35px;
        position: relative;
        top: 15%;
        left: 25px;
    }
</style>
