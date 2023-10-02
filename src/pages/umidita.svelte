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
		f7
	} from 'framework7-svelte';
	import CustomNavbar from '../components/CustomNavbar.svelte';
	export let f7router;

	import { umidita, limit_umidita } from '../lib/store';
</script>

<Page name="home">
	<!-- blocco verde -->

	<CustomNavbar title="Umidità"></CustomNavbar>

	<div style="margin-left: 8%;">
		<h3>Umidità da mantenere in percentuale?</h3>

		<div class="slider">
			<List simpleList strongIos outlineIos>
				<ListItem>
					<div style="width: 100%; margin: 0 16px" class="display-flex flex-direction-row">
						<Range
							min={0}
							max={100}
							step={1}
							bind:value={$umidita}
							label={true}
							color="orange"
							style="margin: 0;"
						/>
					</div>
				</ListItem>
			</List>
		</div>

		<div>
			<List>
				<ListItem
					checkbox
					value="check_1"
					bind:checked={$limit_umidita}
					title="Notifiche in caso di umidità errata?"
				/>
			</List>
		</div>
	</div>
</Page>

<style>
	.slider {
		margin-top: -10%;
		width: 90%;
	}
</style>
