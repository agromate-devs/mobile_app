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
	import PiantaCard from './PiantaCard.svelte';
	import { get_plant_photo } from '/lib/wikipedia';
	import PiantaItem from './PiantaItem.svelte';
    import { onMount } from 'svelte';
    import { getCurrentUser, get_current_user_jwt } from '../lib/firebase_auth';

	let temperature = 0;
    let piante = {"plant_name": "Maria"}
    let jwt = "";

onMount(async () => {
        jwt = await get_current_user_jwt();
    })

    fetch("https://dlc52l1dnc.execute-api.eu-central-1.amazonaws.com/plant_info_api?user_id=uid&sensor_id=UUID"
    ,{headers: new Headers({
                authorization: jwt.token,
                'content-type': 'application/x-www-form-urlencoded'
            })}).then(response => response.json())  // converti a json
    .then(json => piante = json) 
    
    
</script>

<Page name="home">

<CustomNavbar title="Le mie piante" />

<List dividersIos simpleList>
<PiantaItem name={piante.plant_name}/>
</List>

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
