import { writable } from 'svelte/store';

export const current_page = writable("home");
export const selected_family = writable("");