<script lang="ts">
	import CustomNavbar from '../components/CustomNavbar.svelte';

	export let f7router;

	import { Page, List, ListGroup, ListItem, ListIndex } from 'framework7-svelte';
	import { onMount } from 'svelte';
	import { f7 } from 'framework7-svelte';
	import { PLANTS_DB_CONTEXT, selected_family } from '../lib/store';

	let families = [];
	let letters = [];

	async function import_records() {
		const plants = (await (await fetch('usda_light.sql')).text()).split('\n');
		for (let index = 0; index < plants.length; index++) {
			await $PLANTS_DB_CONTEXT.query(plants[index]);
		}
	}

	async function import_schema() {
		const schema = await (await fetch('usda_tables.sql')).text();
		await $PLANTS_DB_CONTEXT.query(schema);
	}

	onMount(async () => {
		f7.dialog.preloader(
			"Caricamento Database in corso... L'operazione potrebbe richiedere qualche minuto"
		);
		if (!$PLANTS_DB_CONTEXT.is_database_ready()) {
			await $PLANTS_DB_CONTEXT.init_capacitor_sqlite_plugin(); // Init web store and jeep sqlite
			if (!(await $PLANTS_DB_CONTEXT.is_database_saved())) {
				await $PLANTS_DB_CONTEXT.init_db(); // Create database on TypeORM
				await import_schema(); // Import schema
				await import_records(); // Import plants
				await $PLANTS_DB_CONTEXT.save_database(); // Save DB
			} else {
				await $PLANTS_DB_CONTEXT.init_db(); // Create database on TypeORM
			}
		}

		families = await $PLANTS_DB_CONTEXT.get_all_plants(); // Get all families
		let unique_letters = new Set(families.map((family) => family.family.charAt(0))); // Get all unique letters of plants for the list
		letters = Array.from(unique_letters); // Svelte can't iterate a Set
		f7.dialog.close();
	});

	function go_to_family(family) {
		$selected_family = family;
		f7router.navigate('/list_plant/');
	}
</script>

<Page name="home">
	<!-- navbar -->
	<CustomNavbar title="Esplora" search_bar search_bar_placeholder="Cerca una specie" />
	<br />
	<List strongIos outlineIos dividersIos class="searchbar-not-found">
		<ListItem title="Nothing found" />
	</List>

	<ListIndex indexes="auto" listEl=".list.contacts-list" scrollList={true} label={true} />
	<List contactsList class="search-list searchbar-found">
		<ListGroup>
			<ListItem title="#" groupTitle />
			<ListItem title="Non categorizzate" />
		</ListGroup>
		{#each letters as letter}
			<!-- Remove empty block -->
			{#if letter != ''}
				<ListGroup>
					<ListItem title={letter} groupTitle />
					{#each families as family}
						{#if family.family.charAt(0) == letter}
							<ListItem title={family.family} on:click={() => go_to_family(family.family)} />
						{/if}
					{/each}
				</ListGroup>
			{/if}
		{/each}
	</List>
</Page>
