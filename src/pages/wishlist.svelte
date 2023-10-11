<script lang="ts">
	import {
		Page,
		Block,
		Button,
		List,
		ListItem,
		SwipeoutActions,
		SwipeoutButton
	} from 'framework7-svelte';
	export let f7router;
	export let f7route;

	import { onMount } from 'svelte';
	import { getCurrentUser, is_user_logged, get_current_user_jwt } from '../lib/firebase_auth.js';
	import PiantaItem from './PiantaItem.svelte';
	import { capitalize, growth_rate_to_about_days, page_panic, ph_media } from '../lib/helper';
	import { Plant } from '../lib/models/plant';
	import { Usda } from '../db/entities/Usda.js';
	import {
		PLANTS_DB_CONTEXT,
		firebase_app,
		latest_wishlist_change_device_uuid,
		selected_plant_name,
		selected_plant_photo,
		selected_plant_scientific_name
	} from '../lib/store';
	import { get_plant_photo } from '../lib/wikipedia.js';
	import CustomNavbar from '../components/CustomNavbar.svelte';
	import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
	import { AccountInfo } from '../lib/models/account_info.js';
	import { import_schema, import_records } from '../lib/db_helper';
	import NotFoundResult from '../components/NotFoundResult.svelte';

	const WISHLIST_API_ENDPOINT =
		'https://v9t12m0y77.execute-api.eu-central-1.amazonaws.com/cors/wishlist';

	let plants: Usda[] = [];
	onMount(async () => {
		if (!$PLANTS_DB_CONTEXT.is_database_ready()) {
			await $PLANTS_DB_CONTEXT.init_capacitor_sqlite_plugin(); // Init web store and jeep sqlite
			if (!(await $PLANTS_DB_CONTEXT.is_database_saved())) {
				await $PLANTS_DB_CONTEXT.init_db(); // Create database on TypeORM
				await import_schema($PLANTS_DB_CONTEXT); // Import schema
				await import_records($PLANTS_DB_CONTEXT); // Import plants
				await $PLANTS_DB_CONTEXT.save_database(); // Save DB
			} else {
				await $PLANTS_DB_CONTEXT.init_db(); // Create database on TypeORM
			}
		}

		let plants_from_store = localStorage.getItem('wishlist_plants'); // Do some cache so we won't became poor for AWS lambda requests

		let device_uuid = localStorage.getItem('device_uuid');

		let plants_raw: Plant[] = [];

		if (plants_from_store == null || $latest_wishlist_change_device_uuid != device_uuid) {
			// Update wishlist in case latest change is from different device
			// Backend
			let jwt = await get_current_user_jwt();
			plants_raw = await (
				await fetch(WISHLIST_API_ENDPOINT, {
					method: 'GET',
					headers: new Headers({
						authorization: jwt.token,
						'content-type': 'application/x-www-form-urlencoded'
					})
				})
			).json();
			console.log('AWS');
			localStorage.setItem('wishlist_plants', JSON.stringify(plants_raw));
		} else {
			console.log('STORE');
			plants_raw = JSON.parse(plants_from_store);
			console.log(plants_raw);
		}

		plants_raw.forEach(async (plant) => {
			let plant_from_db = await $PLANTS_DB_CONTEXT.get_plant_by_common_name(plant.name);
			plant_from_db.uuid = plant.uuid;
			if (plant_from_db != null) {
				plants.push(plant_from_db);
				plants = plants; // Refresh array
			}
		});
	});

	async function select_plant(name: string, sci_name: string) {
		$selected_plant_name = name;
		$selected_plant_photo = await get_plant_photo(name);
		$selected_plant_scientific_name = sci_name;
		f7router.navigate('/plant/');
	}

	async function delete_from_wishlist(uuid) {
		const jwt = await get_current_user_jwt();
		const delete_result = await fetch(WISHLIST_API_ENDPOINT.concat('?plant_uuid='.concat(uuid)), {
			method: 'DELETE',
			headers: new Headers({
				authorization: jwt.token,
				'content-type': 'application/x-www-form-urlencoded'
			})
		});
		if (delete_result.status == 200) {
			/* Update firestore cache */

			const db = getFirestore($firebase_app);
			const uid = (await getCurrentUser()).uid;

			const docRef = doc(db, 'utenti', uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				let document = docSnap.data() as AccountInfo;

				const device_uuid = localStorage.getItem('device_uuid');
				$latest_wishlist_change_device_uuid = device_uuid;
				document.latest_wishlist_change_device_uuid = device_uuid;

				let wishlist_from_store: Plant[] =
					JSON.parse(localStorage.getItem('wishlist_plants')) == null
						? []
						: JSON.parse(localStorage.getItem('wishlist_plants'));

				const plant_to_remove = wishlist_from_store.indexOf({
					name: $selected_plant_name,
					uuid: uuid
				});
				wishlist_from_store.splice(plant_to_remove, 1);
				localStorage.setItem('wishlist_plants', JSON.stringify(wishlist_from_store)); // Update store

				await setDoc(doc(db, 'utenti', uid), document);
			} else {
				page_panic("Errore durante l'eliminazione della pianta", f7router);
			}
		}
	}

	let filtered_wish = [];
	let empty_filter = false;
	function found(e) {
		filtered_wish = e.detail.items;
		if (filtered_wish.length == 0) empty_filter = true;
		else empty_filter = false;
	}
</script>

<Page name="home">
	<CustomNavbar
		title="Lista dei desideri"
		object_key="scientificNameX"
		search_bar
		search_bar_items={plants}
		search_bar_placeholder="Cerca nella lista dei desideri"
		on:found={found}
	></CustomNavbar>
	<Block>
		{#if plants.length == 0}
			<div class="flex-direction-row">
				<p>Nessuna pianta nella lista dei desideri</p>
			</div>
		{/if}

		{#if empty_filter}
			<NotFoundResult></NotFoundResult>
		{/if}

		<!-- <List> -->
		{#each filtered_wish.length == 0 && !empty_filter ? plants : filtered_wish as plant}
			<ListItem swipeout on:swipeoutDelete={() => delete_from_wishlist(plant.uuid)}>
				<SwipeoutActions right>
					<SwipeoutButton delete confirmText="Sei sicuro di voler rimuovere questa pianta?">
						Cancella
					</SwipeoutButton>
				</SwipeoutActions>
				{#if plant.commonName != ''}
					<!-- piantine -->
					<div
						on:click={() => select_plant(plant.commonName, plant.scientificNameX)}
						on:keypress={() => {}}
					>
						<PiantaItem
							temp={plant.temperatureMinimumF == '' ? '?' : plant.temperatureMinimumF}
							ph={ph_media(plant.pHMinimum, plant.pHMaximum)}
							days={growth_rate_to_about_days(plant.growthRate)}
							name={capitalize(plant.commonName)}
						/>
					</div>
				{:else}
					<div
						on:click={() => select_plant(plant.scientificNameX, plant.scientificNameX)}
						on:keypress={() => {}}
					>
						<!-- piantine -->
						<PiantaItem
							temp={plant.temperatureMinimumF == '' ? '?' : plant.temperatureMinimumF}
							ph={ph_media(plant.pHMinimum, plant.pHMaximium)}
							days={growth_rate_to_about_days(plant.growthRate)}
							name={plant.scientificNameX}
						/>
					</div>
				{/if}
			</ListItem>
		{/each}
		<!-- </List> -->
	</Block>
</Page>

<style>
	.vertical_center {
		padding-top: 40%;
	}
</style>
