<script>
	import { Page, Block, Button } from 'framework7-svelte';
</script>

<Page name="home">
	<Block>
		<div class="center">
			<img src="/tizio-rotella.png" alt="tizio-rotella" width="320" height="320" />
		</div>
		<div class="BIG-text">
			<h1>Sei sicuro di eseguire l’aggiornamento?</h1>
			<div class="grid grid-cols-2">
				<div class="button-size">
					<Button fill>Si</Button>
				</div>
				<div class="button-size">
					<Button fill>No</Button>
				</div>
			</div>
			<div style="color:gray">
				<h4>L’aggiornamento potrebbe richiedere alcuni minuti.</h4>
			</div>
		</div>
	</Block>
</Page>

<style>
	.center {
		padding-top: 30%;
		text-align: center;
	}

	.BIG-text {
		padding-top: 2%;
		text-align: center;
	}

	.button-size {
		width: 60%;
		padding-left: 20%;
		padding-right: 20%;
	}
</style>
