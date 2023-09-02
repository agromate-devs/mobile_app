<script>
    import {
        Navbar,
        Page,
        BlockTitle,
        Range,
        List,
        ListItem,
        Icon,
        ListButton
    } from "framework7-svelte";
    import CustomNavbar from "../components/CustomNavbar.svelte";

    let temperature = 0;
</script>

<Page name="home">
    <!-- blocco verde -->

    <CustomNavbar title="Temperatura"></CustomNavbar>

    <!-- slider -->

    <div class="container">
        <BlockTitle>Temperature</BlockTitle>
        <List simpleList strongIos outlineIos>
            <ListItem>
                <div>
                    <Icon ios="f7:thermometer" md="f7:thermometer" />
                </div>
                <div
                    style="width: 100%; margin: 0 16px"
                    class="display-flex flex-direction-row"
                >
                    <Range
                        min={0}
                        max={100}
                        step={1}
                        bind:value={temperature}
                        label={true}
                        color="orange"
                        style="margin: 0;"
                    />
                    <span style="position: relative; left: 15px; margin: 0;"
                        >{temperature}C</span
                    >
                </div>
            </ListItem>
        </List>
    </div>

    <div>
        <div>
            <List>
                <!-- Additional "checkbox" prop to enable checkbox list item -->
                <ListItem
                    checkbox
                    value="check_1"
                    checked
                    title="Notifica in caso di temperatura errata"
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
    h1 {
        color: white;
        font-size: 35px;
        margin: 0;
        position: relative;
        top: 50%;
        right: 10px;
    }
</style>
