<script lang="ts">
	export let f7router;
	import { Page, Block, Button, f7 } from 'framework7-svelte';
	import { onMount } from 'svelte';
	import { get_current_user_jwt, getCurrentUser } from '../lib/firebase_auth.js';
	import CustomNavbar from '../components/CustomNavbar.svelte';
	import {
		illuminazione,
		limit_umidita,
		ora_fine,
		ora_inizio,
		precipitazioni,
		selected_plant_name,
		temperature,
		terreno_arido,
		umidita,
		wheePickerValue
	} from '../lib/store';
	import { PushNotifications } from '@capacitor/push-notifications';

	let info = [];

	const DEVICE_API_ENDPOINT = 'https://b8kc0x92yj.execute-api.eu-central-1.amazonaws.com';
	const PLANT_INFO_API = 'https://dlc52l1dnc.execute-api.eu-central-1.amazonaws.com';
	let device_token = '';

	const addListeners = async () => {
		await PushNotifications.addListener('registration', async (token) => {
			device_token = token.value;
		});

		await PushNotifications.addListener('registrationError', (err) => {
			console.error('Registration error: ', err.error);
			alert('Errore durante la registrazione al servizio di notifiche. Potrei procedere comunque,');
		});

		await PushNotifications.addListener('pushNotificationReceived', (notification) => {
			// console.debug('Push notification received: ', notification);
			// console.debug('Notification: ', JSON.stringify(notification));
		});

		await PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
			// console.log(
			// 	'Push notification action performed',
			// 	notification.actionId,
			// 	notification.inputValue
			// );
		});
	};

	const registerNotifications = async () => {
		let permStatus = await PushNotifications.checkPermissions();

		if (permStatus.receive === 'prompt') {
			permStatus = await PushNotifications.requestPermissions();
		}

		if (permStatus.receive !== 'granted') {
			throw new Error('User denied permissions!');
		}

		await PushNotifications.register();
	};

	onMount(async () => {
		if ((await getCurrentUser()).email != null) {
			// User is already logged in
			f7router.navigate('/main/');
		}

		await registerNotifications();
		await addListeners();

		const user = await getCurrentUser();
		const jwt = await get_current_user_jwt();
		console.log(jwt);

		const res = await fetch(DEVICE_API_ENDPOINT, {
			headers: new Headers({
				authorization: jwt.token,
				'content-type': 'application/x-www-form-urlencoded'
			})
		});
		info = await res.json();
	});

	async function assign_plant(device_id) {
		f7.dialog.alert("Pianta aggiunta correttamente all'agrosmart!", () => {
			f7router.navigate('/homepage/');
		});
		const user = await getCurrentUser();
		const jwt = await get_current_user_jwt();
		const request_body = JSON.stringify({
			plant_name: $selected_plant_name,
			sensor_id: device_id,
			device_token: device_token,
			default_temperature: $temperature,
			temperature_limit: 20.5, // Useless, will drop soon
			notify_wrong_temperature: true,
			default_humidity: $umidita,
			humidity_limit: 20.5, // Useless, will drop soon
			notify_wrong_humidity: $limit_umidita,
			default_precipitation: $precipitazioni,
			precipitation_limit: 20.5, // Useless, will drop soon
			notify_wrong_soil_humidity: $terreno_arido,
			default_light_color: $wheePickerValue.hex,
			light_time: 3, // $ora_fine - $ora_inizio
			light_intensity: $illuminazione
		});
		const res = await fetch(PLANT_INFO_API, {
			headers: new Headers({
				authorization: jwt.token,
				'content-type': 'application/x-www-form-urlencoded'
			}),
			body: request_body
		});

		if (res.status == 200) {
			f7.dialog.alert('Pianta aggiunta correttamente');
		} else {
			f7.dialog.alert("Si è verificato un errore durante l'aggiunta della pianta");
		}
	}
</script>

<Page name="home">
	<CustomNavbar title="Coltiva basilico"></CustomNavbar>
	<Block>
		{#each info as net, i}
			<div class="grid grid-cols-2">
				<img src="agrosmart.png" alt="agrosmart" />
				<div>
					<h2>Agrosmart v1 {i + 1}</h2>
					<Button fill on:click={() => assign_plant(net.device_id)}>Assegna pianta</Button>
				</div>
			</div>
		{/each}
	</Block>
</Page>
