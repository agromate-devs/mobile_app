import type { FirebaseApp } from 'firebase/app';
// import { DBContext } from '../db/DBContext';

export let current_page = $state({
		name: 'home',
});

export let selected_family = $state('');
export let selected_plant_name = $state('');
export let selected_plant_photo = $state('');
export let selected_plant_scientific_name = $state('');

export let firebase_app = $state({
	app: undefined as FirebaseApp,
});

export let latest_wishlist_change_device_uuid = $state({
	value: ''
});

// export const PLANTS_DB_CONTEXT = $state(new DBContext());
export let wifi_password = $state('');
export let wifi_SSID = $state('');
export let wifi_BSSID = $state('');
export let device_uuid = $state('');

//export let umidita = $state('');
//export let limit_umidita = $state(false);
export let plant_settings = $state({
	temperature: '',
	illuminazione: {
		value: '',
		wheePickerValue: {
			hex: '#00ff00'
		},
		ora_inizio: '',
		ora_fine: ''
	},
	precipitazioni: {
		value: '',
		terreno_arido: ''
	},
	umidita: {
		value: '',
		limit: false
	}
});
//export let temperature = $state('');
//export let illuminazione = $state('');
//export let wheePickerValue = $state({ hex: '#00ff00' });
//export let ora_inizio = $state('');
//export let ora_fine = $state('');
//export let precipitazioni = $state(0);
//export let terreno_arido = $state(false);
