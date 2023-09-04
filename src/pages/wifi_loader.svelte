<script>
	export let f7router;
	import { Page, Block, f7 } from 'framework7-svelte';
	import { EsptouchCapacitorPlugin } from 'capacitor-plugin-esptouch';
	import { wifi_password, wifi_SSID, wifi_BSSID } from '../lib/store';
	import { getCurrentUser, get_current_user_jwt } from '../lib/firebase_auth';
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { CapacitorHttp } from '@capacitor/core';

	const NEW_SENSOR_ENDPOINT = 'https://b8kc0x92yj.execute-api.eu-central-1.amazonaws.com';
	onMount(async () => {
		const sensor_uuid = uuidv4();
		const user = await getCurrentUser();
		const user_jwt = await get_current_user_jwt();
		let result = await EsptouchCapacitorPlugin.EsptouchV2({
			ssid: $wifi_SSID,
			bssid: $wifi_BSSID,
			password: $wifi_password,
			custom_data: sensor_uuid
		});

		if (result.error == '{}') {
			const new_device_post_result = await CapacitorHttp.post({
				url: NEW_SENSOR_ENDPOINT.concat(`?user_id=${user.uid}&device_id=${sensor_uuid}`),
				headers: {
					Authorization: user_jwt.token
				}
			});

			if (!JSON.parse(new_device_post_result.data).status) {
				f7.dialog.alert('Connessione riuscita!', 'Successo', () => f7router.navigate('/homepage/'));
			} else {
				f7.dialog.alert('Errore durante la connessione al dispositivo', 'Errore');
			}
		} else {
			f7.dialog.alert('Errore durante la connessione al dispositivo', 'Errore');
		}
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
