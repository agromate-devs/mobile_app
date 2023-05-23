<script>
    export let f7router;
    export let f7route;

    import {
        Page,
        Navbar,
        Block,
        List,
        ListInput,
        ListItem,
        Button,
        Link,
        f7,
    } from "framework7-svelte";

    import LoginWithGoogle from "../components/login_with_google.svelte";
    import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

    let email, password;
    
    async function login() {
        const result = await FirebaseAuthentication.signInWithEmailAndPassword({
            email: email,
            password: password,
        });
        if (result.user != null) {
            f7router.navigate("/main/");
        }
        // Save user to store(maybe?)
    }
</script>

<Page>
    <Navbar title="Agromate" />

    <Block>
        <h1>Ciao!</h1>
        <p>Inizia a coltivare ora!</p>
    </Block>

    <List strongIos dividersIos insetIos>
        <ListInput
            label="Email"
            floatingLabel
            type="text"
            placeholder="Email"
            clearButton
            required
            validate
            bind:value={email}
        >
            <!-- <i class="icon demo-list-icon" slot="media" /> -->
        </ListInput>

        <ListInput
            label="Password"
            floatingLabel
            type="password"
            placeholder="Your password"
            clearButton
            required
            validate
            bind:value={password}
        >
            <!-- <i class="icon demo-list-icon" slot="media" /> -->
        </ListInput>
        <div class="float-right">
            <ListItem title="Password dimenticata?" />
        </div>
    </List>
    <br />

    <Block>
        <div class="display-flex justify-content-center">
            <LoginWithGoogle />
        </div>
    </Block>

    <!-- <br /> -->
    <Block>
        <Button on:click={login} fill>Accedi</Button>
        <br />
        <div class="text-align-center">
            Non hai un account?
            <span class="green_span">
                <Link href="/registrati/">Registrati</Link>
            </span>
        </div>
    </Block>
</Page>

<style>
    .green_span {
        color: #006c45;
    }
</style>
