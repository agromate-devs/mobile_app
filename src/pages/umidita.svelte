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

    let umidita = 0;
</script>

<Page name="home">
    <!-- blocco verde -->

    <div class="container-green">
        <img src="/freccio.png" id="freccia" alt="freccia" />
        <h1 class="title">Umidita</h1>
    </div>

    <div style="margin-left: 8%;">
        <h3>Umidità da mantenere in percentuale?</h3>

        <div class="slider">
            <List simpleList strongIos outlineIos>
                <ListItem>
                    <div
                        style="width: 100%; margin: 0 16px"
                        class="display-flex flex-direction-row"
                    >
                        <Range
                            min={0}
                            max={100}
                            step={1}
                            bind:value={umidita}
                            label={true}
                            color="orange"
                            style="margin: 0;"
                        />
                    </div>
                </ListItem>
            </List>
        </div>
        
        <div>
            <List>
                <ListItem
                    checkbox
                    value="check_1"
                    checked
                    title="Notifiche in caso di umidità scarsa?"
                />
            </List>
        </div>

        <h3>Limite di umidità per notifica:</h3>

        <div class="slider">
            <List simpleList strongIos outlineIos>
                <ListItem>
                    <div
                        style="width: 100%; margin: 0 16px"
                        class="display-flex flex-direction-row"
                    >
                        <Range
                            min={0}
                            max={100}
                            step={1}
                            bind:value={umidita}
                            label={true}
                            color="orange"
                            style="margin: 0;"
                        />
                    </div>
                </ListItem>
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

    .slider {
        margin-top: -10%;
        width: 90%;
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
