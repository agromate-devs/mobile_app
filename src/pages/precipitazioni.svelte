<script>
	import {
		Navbar,
		Page,
		BlockTitle,
		Range,
		List,
		ListItem,
		Icon,
		ListButton,
		ListInput,
		Block,
		f7,
		Button
	} from 'framework7-svelte';
	import CustomNavbar from '../components/CustomNavbar.svelte';

	import { terreno_arido, precipitazioni } from '../lib/store';
</script>

<Page name="home">
	<!-- blocco verde -->
	<CustomNavbar title="precipitazioni"></CustomNavbar>
	<div style="margin-left: 8%;">
		<h3>Quantità d’acqua in mm per giorno:</h3>

		<div class="number-input">
			<List strongIos dividersIos insetIos>
				<ListInput
					label="precipitazioni"
					type="url"
					placeholder="mm²"
					clearButton
					bind:value={$precipitazioni}
					disabled={$terreno_arido}
				/>
			</List>
		</div>

		<div>
			<List>
				<!-- Additional "checkbox" prop to enable checkbox list item -->
				<ListItem checkbox value="check_1" title="Notifiche in caso di terreno arido?" />
			</List>
		</div>

		<div>
			<List>
				<!-- Additional "checkbox" prop to enable checkbox list item -->
				<ListItem
					checkbox
					value="check_2"
					bind:checked={$terreno_arido}
					title="Innaffia quando il terreno è arrido?"
				/>
			</List>
		</div>
	</div>

	<div>
		<div style="display: flex; justify-content: center;">
			<List>
				<Button fill large>Conferma</Button>
			</List>
		</div>
	</div>
</Page>

<style>
	.number-input {
		margin-top: -5%;
		width: 45%;
	}
</style>
