<script lang="ts">
	import { onMount } from 'svelte';
	import { getDevice } from 'framework7/lite-bundle';
	import { f7, f7ready, App, View, Toolbar, Link } from 'framework7-svelte';
	import { initializeApp } from 'firebase/app';
	import { firebaseConfig } from '../lib/firebase_config.js';
	import capacitorApp from '../js/capacitor-app';
	import routes from '../js/routes';
	import { current_page, firebase_app } from '../lib/store';

	$firebase_app = initializeApp(firebaseConfig);

	const device = getDevice();
	// Framework7 Parameters
	let f7params = {
		name: 'AgroMate', // App name
		theme: 'auto', // Automatic theme detection
		colors: {
			primary: '#00ff96'
		},
		darkMode: false,

		// App routes
		routes: routes,

		// Input settings
		input: {
			scrollIntoViewOnFocus: device.capacitor,
			scrollIntoViewCentered: device.capacitor
		},
		// Capacitor Statusbar settings
		statusbar: {
			iosOverlaysWebView: true,
			androidOverlaysWebView: false
		}
	};

	onMount(() => {
		f7ready(() => {
			// Init capacitor APIs (see capacitor-app.js)
			if (f7.device.capacitor) {
				capacitorApp.init(f7);
			}
			// Call F7 APIs here
		});
	});
	function change_tab(new_page, tapped_tab: string) {
		const active_elements = document.getElementsByClassName('tab-link-active');
		const tapped_element = document.getElementById(tapped_tab);
		if (tapped_element != null) {
			if (active_elements != null) {
				// First time, active_elements will be null
				for (let i = 0; i < active_elements.length; i++) {
					active_elements[i].classList.remove('tab-link-active');
				}
			}

			tapped_element.classList.add('tab-link-active');
		}
		f7.views.main.router.navigate(new_page);
	}
</script>

<App {...f7params}>
	<!-- Your main view, should have "view-main" class -->
	<View main class="safe-areas" url="/">
		{#if $current_page != 'home'}
			<Toolbar tabbar icons position="bottom">
				<Link
					id="tab-1"
					tabLink="#tab-1"
					tabLinkActive
					text="Homepage"
					iconIos="f7:home"
					iconMd="material:home"
					on:click={() => change_tab('/homepage/', 'tab-1')}
				/>
				<Link
					id="tab-2"
					tabLink="#tab-2"
					text="Lista dei desideri"
					iconIos="f7:star"
					iconMd="f7:star"
					on:click={() => change_tab('/wishlist/', 'tab-2')}
				/>
				<Link
					id="tab-3"
					tabLink="#tab-3"
					text="Profilo"
					iconIos="f7:person"
					iconMd="material:person"
					on:click={() => change_tab('/profile/', 'tab-3')}
				/>
			</Toolbar>
		{/if}
	</View>
</App>
