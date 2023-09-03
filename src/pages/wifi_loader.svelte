<script>
	import { Page, Block } from 'framework7-svelte';
	import { EsptouchCapacitorPlugin } from 'capacitor-plugin-esptouch';
	import { wifi_password, wifi_SSID, wifi_BSSID } from '../lib/store';
	import { get_current_user_jwt } from '../lib/firebase_auth';
	import { onMount } from 'svelte';

	onMount(async () => {
		EsptouchCapacitorPlugin.EsptouchV2({
			ssid: $wifi_SSID,
			bssid: $wifi_BSSID,
			password: $wifi_password,
			custom_data: (await get_current_user_jwt()).token
		});
	});
</script>

<Page name="home">
	<Block>
		<div class="center">
			<img src="/wifi.png" alt="wifi" width="92px" height="83px" />
			<!-- bovo metti a posto questa immagine -->
		</div>

		<div class="BIG-text">
			<h1>Connessione in corso...</h1>
			<div style="color:gray">
				<h4>L’operazione potrebbe richiedere alcuni minuti...</h4>
			</div>
		</div>
	</Block>
</Page>

<style>
	.center {
		padding-top: 80%;
		text-align: center;
	}

	.BIG-text {
		text-align: center;
	}
</style>
