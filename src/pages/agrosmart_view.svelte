<script>
	export let f7router;
	import Agrosmart from '../components/Agrosmart.svelte';
	import { Page, Block, Navbar, Button } from 'framework7-svelte';
	import { onMount } from 'svelte';
	import { getCurrentUser } from '../lib/firebase_auth.js';
	import CustomNavbar from '../components/CustomNavbar.svelte';

	onMount(async () => {
		if ((await getCurrentUser()).email != null) {
			// User is already logged in
			f7router.navigate('/main/');
		}
	});
</script>

<Page name="home">
	<div class="rectangle">
		<div class="circle1"></div>
		<div class="circle2"></div>
		<div class="freccia">
			<a class="link" href="/">
				<img src="/freccio.png" alt="freccio" width="75%" />
			</a>
		</div>
		<div class="center">
			<img src="/foto-profile.png" alt="foto_profile" width="120" height="120" />
			<div style="color:#ffffff;">
				<h1>Ciro Esposito</h1>
				<h4 class="subtitle">
					<img src="/segnaposto.png" alt="segnaposto" width="15" height="15" /> 200 piante piantate
				</h4>
			</div>
		</div>
	</div>
	<Block>
		<Agrosmart
			device_name="Agrosmart v1"
			signal_level={86}
			sw_version="1.2.0"
			update_available={false}
		></Agrosmart>
	</Block>

	<Block>
		<Button fill href="/identify_plant/">Accoppia un nuovo dispositivo</Button>
	</Block>
</Page>

<style>
	.center {
		position: relative;
		top: -520px;
		text-align: center;
	}

	.rectangle {
		width: 100%;
		height: 280px;
		background-image: linear-gradient(to right, rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
	}

	.circle1 {
		position: relative;
		left: 110px;
		top: -60px;
		height: 320px;
		width: 320px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.15);
	}

	.circle2 {
		position: relative;
		left: 280px;
		top: -180px;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.15);
	}

	.subtitle {
		position: relative;
		top: -18px;
	}
	.freccia {
		position: relative;
		top: -460px;
		width: 10%;
		height: 20%;
		padding-left: 5%;
	}
</style>
