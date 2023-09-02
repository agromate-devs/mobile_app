<script>
	export let f7router;
	import { Page } from 'framework7-svelte';
	import { CapacitorWifi } from 'capacitorjs-plugin-wifi';

	let wifi = [];

	async function checkPermissionResult() {
		let result = await CapacitorWifi.checkPermission();
		if (result.status != 'true') {
			CapacitorWifi.requestPermission();
		}
	}

	async function scanWifiResult() {
		await checkPermissionResult();
		let result = await CapacitorWifi.wifiScan();
		wifi = result.networks;
	}

	scanWifiResult();
</script>

<Page name="home">
	<!-- blocco verde -->

	<div class="rectangle">
		<div class="circle1" />
		<div class="circle2" />
		<div class="freccia">
			<a class="link" href="#0" on:click={() => f7router.navigate('/homepage/')}>
				<img src="/freccio.png" alt="freccio" width="75%" />
			</a>
		</div>
		<div class="left">
			<h1>Ricerca Wi-FI</h1>
		</div>
	</div>

	<!-- elenco esp -->

	{#each wifi as net}
		<div class="container-esp">
			<div class="block1">
				<h5>{net.level}</h5>
				<h4>RSSI:</h4>
				<h2>{net.SSID}</h2>
				<div class="block2">
					<img src="/agrosmart.png" alt="photo" />
					<div class="block3">
						<button>Connetti</button>
					</div>
				</div>
			</div>
		</div>
	{/each}
</Page>

<style>
	h1 {
		color: white;
		font-size: 35px;
		padding-left: 10px;
	}

	.left {
		position: relative;
		top: -300px;
		text-align: left;
		padding-left: 5%;
		color: #ffffff;
	}

	.rectangle {
		width: 100%;
		height: 200px;
		background-image: linear-gradient(to right, rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
	}

	.circle1 {
		position: relative;
		left: 190px;
		top: -60px;
		height: 220px;
		width: 220px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.15);
	}

	.circle2 {
		position: relative;
		left: 310px;
		top: -110px;
		height: 120px;
		width: 120px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.15);
	}

	.freccia {
		position: relative;
		top: -300px;
		width: 10%;
		height: 20%;
		padding-left: 5%;
	}

	.container-esp {
		display: flex;
		align-items: left;
		justify-content: left;
		flex-direction: row;
	}

	.block1 {
		display: flex;
		flex-direction: row-reverse;
		margin-top: 40px;
		margin-left: 20px;
	}

	img {
		width: 90px;
		height: 90px;
	}

	h2 {
		position: relative;
		bottom: 24px;
		margin-left: 15px;
		color: #36455a;
	}

	h4 {
		color: #a1a8b9;
		position: relative;
		top: 2vh;
		right: 14vh;
	}

	h5 {
		font-size: 16px;
		color: #36455a;
		position: relative;
		top: 37px;
		right: 56%;
	}

	button {
		background-color: #2dda93;
		color: white;
		height: 38px;
		width: 100px;
		position: relative;
		border-radius: 5px;
		left: 30vh;
		bottom: 6vh;
		font-size: 16px;
	}
</style>
