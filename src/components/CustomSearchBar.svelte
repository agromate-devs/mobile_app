<script lang="ts">

	import { createEventDispatcher } from 'svelte';
	interface Props {
		placeholder: any;
		items: object[];
		object_key: string;
	}

	let { placeholder, items, object_key }: Props = $props();

	const dispatch = createEventDispatcher();

	function search(e) {
		console.log(e.target.value);
		console.log(items);
		dispatch('found', {
			items: items.filter((item) => item[object_key].toLowerCase().includes(e.target.value))
		});
	}
</script>

<form class="searchbar">
	<div class="searchbar-inner">
		<div class="searchbar-input-wrap">
			<input type="search" {placeholder} oninput={search} />
			<i class="searchbar-icon"></i>
			<span class="input-clear-button"></span>
		</div>
		<span class="searchbar-disable-button">Cancel</span>
	</div>
</form>
