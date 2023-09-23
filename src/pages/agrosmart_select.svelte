<script>
	export let f7router;
	import { Page, Block, Navbar, Button } from 'framework7-svelte';
	import { onMount } from 'svelte';
	import { getCurrentUser } from '../lib/firebase_auth.js';
	import { get_current_user_jwt } from '../lib/firebase_auth.js';
	import CustomNavbar from '../components/CustomNavbar.svelte';

	let info = [];

	onMount(async () => {
		if ((await getCurrentUser()).email != null) {
			// User is already logged in
			f7router.navigate('/main/');
		}

		let jwt = await get_current_user_jwt();
		const res = await fetch(
			'https://b8kc0x92yj.execute-api.eu-central-1.amazonaws.com/?user_id=user_test_id',
			{
				headers: new Headers({
					authorization: jwt.token,
					'content-type': 'application/x-www-form-urlencoded'
				})
			}
		);
		info = await res.json();
	});
</script>

<Page name="home">
	<CustomNavbar title="Coltiva basilico"></CustomNavbar>
	<Block>
		{#each info as net, i}
			<div class="grid grid-cols-2">
				<img src="agrosmart.png" alt="agrosmart" />
				<div>
					<h2>agrosmart v1 {i + 1}</h2>
					<Button fill>connect</Button>
				</div>
			</div>
		{/each}
	</Block>
</Page>
