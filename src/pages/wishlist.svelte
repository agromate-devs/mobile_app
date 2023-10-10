<script lang="ts">
	import { Page, Block, Button, List, ListItem } from 'framework7-svelte';
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
		latest_wishlist_change_device_uuid,
		selected_plant_name,
		selected_plant_photo,
		selected_plant_scientific_name
	} from '../lib/store';
	import { get_plant_photo } from '../lib/wikipedia.js';

	const WISHLIST_API_ENDPOINT =
		'https://v9t12m0y77.execute-api.eu-central-1.amazonaws.com/cors/wishlist';

	let plants: Usda[] = [];
	onMount(async () => {
		await $PLANTS_DB_CONTEXT.init_capacitor_sqlite_plugin(); // Init web store and jeep sqlite
		if (!(await $PLANTS_DB_CONTEXT.is_database_saved())) {
			// If database is not saved in store we can't do anything in this page so abort and emit error
			page_panic('Database non inizializzato.', f7router);
		}

		let plants_from_store = localStorage.getItem('wishlist_plants'); // Do some cache so we won't became poor for AWS lambda requests

		let device_uuid = localStorage.getItem('device_uuid');

		let plants_raw: Plant[] = [];

		if (plants_from_store == null || $latest_wishlist_change_device_uuid != device_uuid) {
			// Update wishlist in case latest change is from different device
			// Backend
			let user = await getCurrentUser();
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
		}

		plants_raw.forEach(async (plant) => {
			let plant_from_db = await $PLANTS_DB_CONTEXT.get_plant_by_common_name(plant.name);
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
</script>

<Page name="home">
	<Block>
		<!-- <List> -->
		{#each plants as plant}
			<ListItem swipeout>
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
