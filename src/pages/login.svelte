<script lang="ts">
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
		f7
	} from 'framework7-svelte';

	import LoginWithGoogle from '../components/login_with_google.svelte';
	import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
	import { GoogleAuthProvider, getAuth, signInWithCredential } from 'firebase/auth';

	import { getFirestore, setDoc } from 'firebase/firestore';
	import { doc, getDoc } from 'firebase/firestore';
	import { firebase_app, latest_wishlist_change_device_uuid } from '../lib/store';
	import { v4 as uuidv4 } from 'uuid';
	import { AccountInfo } from '../lib/models/account_info';
	let email, password;

	function new_device_uuid() {
		const device_uuid = uuidv4();
		localStorage.setItem('device_uuid', device_uuid);
		return device_uuid;
	}

	async function add_device_to_db(uid: string) {
		// Used for cache purpose, we don't steal your personal data
		const db = getFirestore($firebase_app);

		const docRef = doc(db, 'utenti', uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			let document = docSnap.data() as AccountInfo;
			$latest_wishlist_change_device_uuid = document.latest_wishlist_change_device_uuid;
			const device_uuid = localStorage.getItem('device_uuid');
			if (device_uuid == null) {
				const device_uuid = new_device_uuid();
				document.device.push(device_uuid);
				await setDoc(doc(db, 'utenti', uid), document);
			}
		} else {
			const device_uuid = new_device_uuid();
			await setDoc(doc(db, 'utenti', uid), {
				device: [device_uuid],
				latest_wishlist_change_device_uuid: ''
			});
		}
	}

	async function login() {
		try {
			const result = await FirebaseAuthentication.signInWithEmailAndPassword({
				email: email,
				password: password
			});
			if (result.user != null) {
				await add_device_to_db(result.user.uid);
				f7router.navigate('/homepage/');
			}
		} catch (error) {
			console.log(error);
			f7.dialog.alert('Account non esistente, controlla la password o la email.');
		}
	}

	async function reset_pwd() {
		f7.dialog.prompt('Inserisci la tua email', (email) => {
			f7.dialog.confirm(`Sei sicuro che la tua email sia ${email}?`, () => {
				FirebaseAuthentication.sendPasswordResetEmail({ email: email });
				f7.dialog.alert('Email di ripristino password inviata alla casella legata al tuo account');
			});
		});
	}

	async function signInWithGoogle() {
		const result = await FirebaseAuthentication.signInWithGoogle();
		const credential = GoogleAuthProvider.credential(result.credential?.idToken);
		const auth = getAuth();
		const user_result = await signInWithCredential(auth, credential);
		if (user_result.user != null) {
			await add_device_to_db(user_result.user.uid);
			f7router.navigate('/homepage/');
		}
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
			<ListItem on:click={reset_pwd} title="Password dimenticata?" />
		</div>
	</List>
	<br />

	<Block>
		<div
			class="display-flex justify-content-center"
			on:click={signInWithGoogle}
			on:keydown={() => {}}
		>
			<LoginWithGoogle />
		</div>
	</Block>

	<!-- <br /> -->
	<Block>
		<Button on:click={login} fill>Accedi</Button>
		<br />

		{#if import.meta.env.MODE == 'development'}
			<Button href="/homepage/" fill>Accesso DEV</Button>
			<br />
		{/if}

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
