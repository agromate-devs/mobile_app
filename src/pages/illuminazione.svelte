<script>
	import { Page, Range, List, ListItem, Icon, ListButton, ListInput, f7 } from 'framework7-svelte';
	import CustomNavbar from '../components/CustomNavbar.svelte';

	import { illuminazione, wheePickerValue, ora_inizio, ora_fine} from '../lib/store'

	function go_back() {
		var view = f7.views.current;
		view.router.back(view.history[view.history.length - 2], {
			force: true
		});
	}
</script>

<Page name="home">
	<!-- blocco verde -->

	<CustomNavbar title="Illuminazione"></CustomNavbar>

	<div style="margin-left: 8%;">
		<h2>Colore:</h2>

		<div class="color-piker">
			<List strongIos outlineIos>
				<!-- prettier-ignore -->
				<ListInput
                type="colorpicker"
                placeholder="Color"
                readonly
                value={$wheePickerValue}
                onColorPickerChange={(value) => $wheePickerValue = value}
                colorPickerParams={{
                    targetEl: '.wheel-picker-target',
                }}
                >
                <i
                    slot="media"
                    style={`background-color: ${$wheePickerValue.hex}`}
                    class="icon demo-list-icon wheel-picker-target"
                />
                </ListInput>
			</List>
		</div>

		<h2>Tempo di esposizione:</h2>

		<div class="grid grid-cols-2">
			<ListInput label="Date time" type="datetime-local" placeholder="Please choose..." value={ $ora_inizio }>
				<i class="icon demo-list-icon" slot="media" />
			</ListInput>
			<ListInput label="Date time" type="datetime-local" placeholder="Please choose..." value={ $ora_fine }>
				<i class="icon demo-list-icon" slot="media" />
			</ListInput>
		</div>

		<h2>Intensita:</h2>

		<div class="slider container">
			<List simpleList strongIos outlineIos>
				<ListItem>
					<div>
						<Icon ios="f7:light_max" md="f7:light_max" />
					</div>
					<div style="width: 100%; margin: 0 16px" class="display-flex flex-direction-row">
						<Range
							min={0}
							max={100}
							step={1}
							bind:value={$illuminazione}
							label={true}
							color="orange"
							style="margin: 0;"
						/>
						<span style="position: relative; left: 15px; margin: 0;">{$gilluminazione}C</span>
					</div>
				</ListItem>
			</List>
		</div>
	</div>

	<div>
		<div style="display: flex; justify-content: center;">
			<List>
				<ListButton
					title="Conferma"
					style="background-color: #2DDA93; color: white; width: 150px; "
				/>
			</List>
		</div>
	</div>
</Page>

<style>
	.title {
		color: white;
		font-size: 35px;
		margin: 0;
		position: relative;
		top: 50%;
		right: 10px;
	}

	.color-piker {
		width: 45%;
		margin-top: -10%;
	}

	.slider {
		width: 90%;
		margin-top: -10%;
	}

	.container-green {
		background-image: linear-gradient(to right, rgba(97, 210, 196, 1), rgba(41, 216, 144, 1));
		height: 180px;
		display: flex;
		align-items: left;
	}

	#freccia {
		width: 35px;
		height: 35px;
		position: relative;
		top: 15%;
		left: 25px;
	}

	.timer {
		margin-left: 5%;
		margin-bottom: 6%;
		margin-top: -10%;
	}

	input {
		margin-top: -10%;
	}
</style>
