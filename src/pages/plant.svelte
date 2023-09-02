<script lang="ts">
	export let f7router;
	import { Page, Searchbar, f7, Fab, FabButton, Icon, FabButtons, Button } from 'framework7-svelte';
	import {
		selected_plant_photo,
		selected_plant_name,
		selected_family,
		selected_plant_scientific_name,
		latest_wishlist_change_device_uuid,
		firebase_app
	} from '../lib/store';
	import { onMount } from 'svelte';
	import { get_plant_description } from '../lib/wikipedia';
	import { getCurrentUser, get_current_user_jwt } from '../lib/firebase_auth';
	import { v4 as uuidv4 } from 'uuid';
	import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
	import { page_panic } from '../lib/helper';
	import { AccountInfo } from '../lib/models/account_info';
	import { Plant } from '../lib/models/plant';

	function go_back() {
		var view = f7.views.current;
		view.router.back(view.history[view.history.length - 2], {
			force: true
		});
	}

	let plant_description = '';
	const WISHLIST_API_ENDPOINT =
		'https://v9t12m0y77.execute-api.eu-central-1.amazonaws.com/cors/wishlist';
	const DEFAULT_LIST_ID = 0;

	async function save_plant_into_wishlist() {
		let user = await getCurrentUser();
		let jwt = await get_current_user_jwt();
		const plant_uuid = uuidv4();
		fetch(WISHLIST_API_ENDPOINT, {
			method: 'POST',
			headers: new Headers({
				authorization: jwt.token,
				'content-type': 'application/x-www-form-urlencoded'
			}),
			body: JSON.stringify({
				uid: user.uid,
				list_id: DEFAULT_LIST_ID,
				plant: {
					name: $selected_plant_name,
					uuid: plant_uuid
				}
			})
		});

		$latest_wishlist_change_device_uuid = localStorage.getItem('device_uuid');

		const db = getFirestore($firebase_app);
		const uid = (await getCurrentUser()).uid;

		const docRef = doc(db, 'utenti', uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			let document = docSnap.data() as AccountInfo;

			const device_uuid = localStorage.getItem('device_uuid');
			$latest_wishlist_change_device_uuid = device_uuid;
			document.latest_wishlist_change_device_uuid = device_uuid;

			let wishlist_from_store: Plant[] = JSON.parse(localStorage.getItem('wishlist_plants'));
			wishlist_from_store.push({
				name: $selected_plant_name,
				uuid: plant_uuid
			});
			localStorage.setItem('wishlist_plants', JSON.stringify(wishlist_from_store)); // Update store

			await setDoc(doc(db, 'utenti', uid), document);
		} else {
			page_panic('Errore irrecuperabile durante il salvataggio in wishlist', f7router);
		}

		f7.dialog.alert('Pianta salvata nella lista dei desideri!');
	}

	onMount(async () => {
		plant_description = await get_plant_description($selected_plant_name);
	});
</script>

<Page>
	<div class="rectangle" style="--image:url('{$selected_plant_photo}')">
		<div class="circle1" />
		<div class="circle2" />
		<div class="freccia">
			<a class="link" href="#0" on:click={() => go_back()}>
				<img src="/freccio.png" alt="freccio" width="75%" />
			</a>
		</div>

		<!-- searchbar cambiare colore-->
		<div class="search_bar">
			<Fab position="right-top" color="red" on:click={save_plant_into_wishlist}>
				<Icon ios="f7:heart_fill" md="f7:heart_fill" />
			</Fab>
		</div>
	</div>
	<div class="info_container">
		<h1 class="plant_name">{$selected_plant_name}</h1>
		<div class="grid grid-cols-2 grid-gap">
			<div>
				<h2>Nome scientifco</h2>
				<p>{$selected_plant_scientific_name}</p>
			</div>
			<div>
				<h2>Famiglia</h2>
				<p>{$selected_family}</p>
			</div>
		</div>
		<h1 class="plant_name">Descrizione</h1>
		<p>{plant_description}</p>
		<div class="grid grid-cols-2 grid-gap btn_container">
			<div>
				<Button fill>Ordina semi</Button>
			</div>
			<div>
				<Button fill href="/coltivation/">Coltiva</Button>
			</div>
		</div>
	</div>
</Page>

<style>
	.rectangle {
		width: 100%;
		height: 300px;
		background-image: var(--image);
		/* background-repeat: no-repeat; */
		background-size: cover;
	}

	.freccia {
		/* position: relative;
        top: -300px; */
		width: 10%;
		height: 20%;
		padding-left: 3%;
		padding-top: 4%;
	}

	.search_bar {
		position: relative;
		top: 175px;
		padding-left: 5%;
		padding-right: 5%;
	}

	.info_container {
		padding-left: 5%;
	}

	.btn_container {
		padding-right: 5%;
	}
</style>
