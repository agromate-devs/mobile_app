import { writable } from 'svelte/store';

export const current_page = writable("home");
export const selected_family = writable("");
export const selected_plant_name = writable("");
export const selected_plant_photo = writable("");
export const selected_plant_scientific_name = writable("");