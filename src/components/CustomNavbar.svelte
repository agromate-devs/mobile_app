<script lang="ts">
	// We call this component CustomNavbar to avoid conflicts with f7 navbar
	export let title: string,
		search_bar: boolean = false,
		search_bar_placeholder: string | null = null,
		search_bar_items = [],
		object_key: string = '';

	import { f7 } from 'framework7-svelte';
	import CustomSearchBar from './CustomSearchBar.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function go_back() {
		var view = f7.views.current;
		view.router.back(view.history[view.history.length - 2], {
			force: true
		});
	}

	function found_items(e) {
		dispatch('found', {
			items: e.detail.items
		});
	}
</script>

<div class="rectangle">
	<div class="circle1" />
	<div class="circle2" />
	<div class="freccia">
		<a class="link" href="#0" on:click={() => go_back()}>
			<img src="/freccio.png" alt="freccio" width="75%" />
		</a>
	</div>
	<div class="left">
		<h1>{title}</h1>
	</div>

	{#if search_bar}
		<!-- searchbar cambiare colore-->
		<div class="search_bar">
			<CustomSearchBar
				placeholder={search_bar_placeholder}
				items={search_bar_items}
				{object_key}
				on:found={found_items}
			></CustomSearchBar>
		</div>
	{/if}
</div>

<style>
	.left {
		position: relative;
		top: -300px;
		text-align: left;
		padding-left: 5%;
		color: #ffffff;
	}

	.rectangle {
		width: 100%;
		height: 200px;
		background-image: linear-gradient(to right, rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
	}

	.circle1 {
		position: relative;
		left: 190px;
		top: -60px;
		height: 220px;
		width: 220px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.15);
	}

	.circle2 {
		position: relative;
		left: 310px;
		top: -110px;
		height: 120px;
		width: 120px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.15);
	}

	.freccia {
		position: relative;
		top: -300px;
		width: 10%;
		height: 20%;
		padding-left: 5%;
	}

	.search_bar {
		position: relative;
		top: -290px;
		padding-left: 5%;
		padding-right: 5%;
	}
</style>
