<script>
	import {
		Navbar,
		Page,
		BlockTitle,
		Range,
		List,
		ListItem,
		Icon,
		ListButton
	} from 'framework7-svelte';
	import CustomNavbar from '../components/CustomNavbar.svelte';

	import { Line } from 'svelte-chartjs';

	import {
		Chart,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
	} from 'chart.js';

	Chart.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	);


	let chartRef;
	let chartRef2;

	let timestamp = [1, 2, 3];
	let timestamp2 = [1, 2, 3];
	let dataseat = [4, 2, 3];
	let dataseat2 = [4, 2, 3];

	setInterval(async function() {
		if(chartRef != null){
		chartRef.update();
		}
		if(chartRef2 != null){
		chartRef2.update();
		}
	}, 5000);

	export const data = {
		labels: timestamp,
		datasets: [{
			data: dataseat,
		}],
	};

	export const data2 = {
		labels: timestamp2,
		datasets: [{
			data: dataseat2,
		}],
	};
</script>

<Page name="home">
	<CustomNavbar title="Le mie piante" />

	<Line {data}bind:chart={chartRef} options={{ responsive: true }}/>

	<Line {data2}bind:chart={chartRef2} options={{ responsive: true }}/>
</Page>

<style>
	h1 {
		color: white;
		font-size: 35px;
		margin: 0;
		position: relative;
		top: 50%;
		right: 10px;
	}
</style>
