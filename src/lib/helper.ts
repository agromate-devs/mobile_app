import { f7 } from 'framework7-svelte';

export function page_panic(trace_msg: string, f7router) {
	// Ispired to Kernel Panic 🐧
	const error = new Error(trace_msg.concat(' Mostro un messaggio di errore.'));
	console.error(error);
	f7.dialog.alert("Errore irrecuperabile. L'app verrà riportata alla pagina principale");
	f7router.navigate('/homepage/');
}

export function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ph_media(ph1: string, ph2: string) {
	let media = (+ph1 + +ph2) / 2; // Cast ph1 and ph2 to string and do media. Very bad to read with unary operators, I know.
	if (media == 0) return '?';
	else return media;
}

export function growth_rate_to_about_days(growth_rate: string) {
	switch (growth_rate) {
		case 'Rapid':
			return '7';
		case 'Moderate':
			return '7-20';
		default:
			return '?';
	}
}
