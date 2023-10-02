<script>
	export let f7router;
	export let f7route;

	import { Page, List } from 'framework7-svelte';
	import CustomNavbar from '../components/CustomNavbar.svelte';
	import PiantaItem from './PiantaItem.svelte';
	import { onMount } from 'svelte';
	import { getCurrentUser, get_current_user_jwt } from '../lib/firebase_auth';

	let piante = [];

	function cache_plants(plants) {
		// Cache plants in localStorage, risparmiamo sul costo delle query
		sessionStorage.setItem('myplants', JSON.stringify(plants));
	}

	function get_plants_from_cache() {
		const cached_plants = sessionStorage.getItem('myplants');
		return cached_plants != null ? JSON.parse(cached_plants) : [];
	}

	onMount(async () => {
		const raw_plants_from_cache = get_plants_from_cache();

		if (raw_plants_from_cache.length > 0) {
			piante = raw_plants_from_cache;
			return; // Stop here, don't do another useless request to AWS
		}

		const jwt = await get_current_user_jwt();
		const user = await getCurrentUser();

		fetch(
			'https://dlc52l1dnc.execute-api.eu-central-1.amazonaws.com/plant_info_api?user_id='
				.concat(user.uid)
				.concat('&sensor_id=NULL'),
			{
				headers: new Headers({
					authorization: jwt.token,
					'content-type': 'application/x-www-form-urlencoded'
				})
			}
		)
			.then((response) => response.json()) // converti a json
			.then((json) => {
				piante = json;
				cache_plants(json);
			});
	});
</script>

<Page name="home">
	<CustomNavbar title="Le mie piante" />

	<List dividersIos simpleList>
		{#each piante as pianta}
			<div on:click={() => f7router.navigate('/chart/')} on:keydown={() => {}}>
				<!-- Cambiare in temperatura dal sensore e aggiungere gli altri parametri -->
				<PiantaItem
					name={pianta.plant_name}
					temp={pianta.default_temperature}
					days={pianta.days}
					ph={pianta.default_humidity}
				/>
			</div>
		{/each}
	</List>
</Page>
