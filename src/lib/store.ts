import { Writable, writable } from 'svelte/store';
import type { FirebaseApp } from 'firebase/app';
import { DBContext } from '../db/DBContext';

export const current_page = writable('home');
export const selected_family = writable('');
export const selected_plant_name = writable('');
export const selected_plant_photo = writable('');
export const selected_plant_scientific_name = writable('');
export const firebase_app: Writable<FirebaseApp> = writable();
export const latest_wishlist_change_device_uuid = writable('');
export const PLANTS_DB_CONTEXT = writable(new DBContext());
export const wifi_password = writable('');
export const wifi_SSID = writable('');
export const wifi_BSSID = writable('');
export const device_uuid = writable('');

export let umidita = writable('');
export let limit_umidita = writable(false);
export let temperature = writable('');
export let illuminazione = writable('');
export let wheePickerValue = writable({ hex: '#00ff00' });
export let ora_inizio = writable('');
export let ora_fine = writable('');
export let precipitazioni = writable(0);
export let terreno_arido = writable(false);
