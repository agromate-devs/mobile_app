<script>
	import { Preloader } from 'framework7-svelte';
	import viewport from '../lib/viewport';
	import { get_plant_photo } from '../lib/wikipedia';

	export let temp, ph, days, name;

	let img = '';
	async function download_img() {
		img = await get_plant_photo(name);
	}
</script>

<div class="grid grid-cols-2">
	{#if img == null}
		<img src="/image_not_found.png" alt="not found" width="140" height="140" />
	{:else if img == ''}
		<div use:viewport on:enterViewport={download_img}>
			<Preloader color="multi" />
		</div>
	{:else}
		<img src={img} alt={name} width="140" height="140" />
	{/if}

	<div>
		<h2>{name}</h2>
		<div class="grid grid-cols-2">
			<div>
				<h5 class="infobox" style="color:gray">Temp. media</h5>
				<h5 class="infobox">{temp}</h5>
			</div>
			<div>
				<h5 class="infobox" style="color:gray">Umidità media</h5>
				<h5 class="infobox">{ph}%</h5>
			</div>
		</div>
		<div>
			<h5 class="infobox" style="color:gray">Giorni impiegati per crescere</h5>
			<h5 class="infobox">{days}</h5>
		</div>
	</div>
</div>

<style>
	.infobox {
		margin-top: -14px;
	}
</style>
