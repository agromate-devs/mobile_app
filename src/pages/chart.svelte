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
		CategoryScale
	} from 'chart.js';
	import { onMount } from 'svelte';
	import { device_uuid } from '../lib/store';
	import { get_current_user_jwt } from '../lib/firebase_auth';
	Chart.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	let chartRef;
	let chartRef2;
	// const datas = [
	// 	{
	// 		uuid: '297a0620-3b4d-40ed-b407-2216eb0d',
	// 		timestamp: '1696110769634',
	// 		hour: true,
	// 		humidity: '33',
	// 		media_month: false,
	// 		soil_humidity: '0',
	// 		temperature: '29'
	// 	},
	// 	{
	// 		uuid: '297a0620-3b4d-40ed-b407-2216eb0d',
	// 		timestamp: '1696115327735',
	// 		hour: true,
	// 		humidity: '40',
	// 		media_month: false,
	// 		soil_humidity: '0',
	// 		temperature: '30'
	// 	},
	// 	{
	// 		uuid: '297a0620-3b4d-40ed-b407-2216eb0d',
	// 		timestamp: '1696112705916',
	// 		hour: true,
	// 		humidity: '52',
	// 		media_month: false,
	// 		soil_humidity: '0',
	// 		temperature: '20'
	// 	},
	// 	{
	// 		uuid: '297a0620-3b4d-40ed-b407-2216eb0d',
	// 		timestamp: '1696115408192',
	// 		hour: true,
	// 		humidity: '55',
	// 		media_month: false,
	// 		soil_humidity: '0',
	// 		temperature: '15'
	// 	},
	// 	{
	// 		uuid: '297a0620-3b4d-40ed-b407-2216eb0d',
	// 		timestamp: '1696110779675',
	// 		hour: true,
	// 		humidity: '60',
	// 		media_month: false,
	// 		soil_humidity: '0',
	// 		temperature: '20'
	// 	}
	// ];

	const SENSORS_API = 'https://mt1oxsz4qf.execute-api.eu-central-1.amazonaws.com?uuid=';
	let data = {};

	onMount(async () => {
		let jwt = await get_current_user_jwt();
		const response = await fetch(SENSORS_API.concat('297a0620-3b4d-40ed-b407-2216eb0d'), {
			headers: new Headers({
				authorization: jwt.token
			})
		});
		const datas = (await response.json()).slice(30, 40); // Take first 10 elements
		data = {
			labels: datas.map((item) => unix_timestamp_to_parsed_date(item.timestamp)),
			datasets: [
				{
					label: 'Temperatura',
					fill: true,
					lineTension: 0.3,
					backgroundColor: 'rgba(225, 204,230, .3)',
					borderColor: 'rgb(205, 130, 158)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgb(205, 130,1 58)',
					pointBackgroundColor: 'rgb(255, 255, 255)',
					pointBorderWidth: 10,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgb(0, 0, 0)',
					pointHoverBorderColor: 'rgba(220, 220, 220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: datas.map((measuration) => measuration.temperature)
				},
				{
					label: 'Umidità',
					fill: true,
					lineTension: 0.3,
					backgroundColor: 'rgba(184, 185, 210, .3)',
					borderColor: 'rgb(35, 26, 136)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgb(35, 26, 136)',
					pointBackgroundColor: 'rgb(255, 255, 255)',
					pointBorderWidth: 10,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgb(0, 0, 0)',
					pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: datas.map((measuration) => measuration.humidity)
				}
			]
		};
	});
	function unix_timestamp_to_parsed_date(unix_timestamp) {
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.
		var date = new Date(unix_timestamp * 1000);
		// Hours part from the timestamp
		var hours = date.getHours();
		// Minutes part from the timestamp
		var minutes = '0' + date.getMinutes();
		// Seconds part from the timestamp
		var seconds = '0' + date.getSeconds();

		// Will display time in 10:30:23 format
		return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	}

	setInterval(async function () {
		if (chartRef != null) {
			chartRef.update();
		}
		if (chartRef2 != null) {
			chartRef2.update();
		}
	}, 5000);
</script>

<Page name="home">
	<CustomNavbar title="Le mie piante" />

	<Line bind:data bind:chart={chartRef} options={{ responsive: true }} />

	<!-- <Line {data2} bind:chart={chartRef2} options={{ responsive: true }} /> -->
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
