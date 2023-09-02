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
