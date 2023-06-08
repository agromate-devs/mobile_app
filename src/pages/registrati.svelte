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
    } from "framework7-svelte";
    import { f7 } from "framework7-svelte";
    import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

    let email, user, password, password_confirm;

    async function registrati() {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // 8 caratteri(1 maiuscolo), un simbolo e un numero
        if (re.test(password) && password == password_confirm) {
            f7.dialog.preloader("Registrazione in corso");
            const result =
                await FirebaseAuthentication.createUserWithEmailAndPassword({
                    email: email,
                    password: password,
                });
            if (result.user != null) {
                await FirebaseAuthentication.updateProfile({
                    displayName: user,
                });
                f7.dialog.close();
                f7.dialog.alert("Registrazione completata!");
                f7router.navigate("/login/");
            }
        } else {
            f7.dialog.alert(
                "La password non rispetta i requisiti di sicurezza, usare 8 caratteri, di cui uno maiuscolo, un simbolo e un numero"
            );
        }
    }
</script>

<Page>
    <Navbar title="Agromate" backLink />

    <Block>
        <h1>Ciao!</h1>
        <p>Registrati e inizia a coltivare ora!</p>
    </Block>

    <List strongIos dividersIos insetIos>
        <ListInput
            label="Email"
            floatingLabel
            type="email"
            placeholder="Email"
            clearButton
            validate
            required
            errorMessage="Inserisci una email valida"
            bind:value={email}
        >
            <!-- <i class="icon demo-list-icon" slot="media" /> -->
        </ListInput>

        <ListInput
            label="Username"
            floatingLabel
            type="text"
            placeholder="Username"
            clearButton
            required
            bind:value={user}
        >
            <!-- <i class="icon demo-list-icon" slot="media" /> -->
        </ListInput>

        <ListInput
            label="Password"
            floatingLabel
            type="password"
            placeholder="Password"
            clearButton
            required
            validate
            bind:value={password}
        >
            <!-- <i class="icon demo-list-icon" slot="media" /> -->
        </ListInput>
        <ListInput
            label="Conferma password"
            floatingLabel
            type="password"
            placeholder="Conferma password"
            clearButton
            required
            validate
            bind:value={password_confirm}
        >
            <!-- <i class="icon demo-list-icon" slot="media" /> -->
        </ListInput>
    </List>
    <Block>
        <Button on:click={registrati} fill>Accedi</Button>
        <p class="text-align-center">
            Non hai un account? <span class="green_span">Registrati</span>
        </p>
    </Block>
</Page>

<style>
    .green_span {
        color: #006c45;
    }
</style>
