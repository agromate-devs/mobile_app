<script>
    import { Block, Navbar, Page } from "framework7-svelte";
    import { onMount } from "svelte";
    import { getCurrentUser } from "../lib/firebase_auth";

    let user = null;

    onMount(async () => {
        user = await getCurrentUser();
        console.log(user);
    })
</script>
<Page>
    <Navbar title="Agromate"></Navbar>
    <Block>
        <h1>Home page</h1>
    </Block>
    <!--
        TODO: Home page
    -->
</Page>