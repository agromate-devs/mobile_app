<script>
	import { Page, Block, Button } from 'framework7-svelte';
</script>

<Page name="home">
	<Block>
		<div class="vertical_center">
			<div class="text-align-center">
				<img src="/home-piantina.png" alt="home-piantina" width="380" height="380" />
			</div>
			<div class="text-align-center">
				<h1>Monitora le tue piante</h1>
				<div style="color:gray">
					<h4>
						Monitora tutti i parametri che influenzano la crescita delle tue piante e crea
						l’ambiente ideale
					</h4>
				</div>
			</div>
		</div>

		<Button fill href="/home3/">Avanti</Button>
	</Block>
</Page>

<style>
	.vertical_center {
		padding-top: 30%;
	}
</style>
