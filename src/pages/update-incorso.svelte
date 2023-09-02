<script>
	import { Page, Block } from 'framework7-svelte';
</script>

<Page name="home">
	<Block>
		<div class="center">
			<div class="animation">
				<img src="/rotella.png" alt="rotella" width="220" height="220" />
				<!-- bovo metti a posto questa immagine -->
			</div>
		</div>
		<div class="center" style="padding-top: 5%;">
			<img src="/progressbar.png" alt="progressbar" width="300" height="35" />
		</div>
		<div class="BIG-text">
			<h1>Aggiornamento in corso...</h1>
			<div style="color:gray">
				<h4>L’operazione potrebbe richiedere alcuni minuti...</h4>
			</div>
		</div>
	</Block>
</Page>

<style>
	.center {
		padding-top: 60%;
		text-align: center;
	}

	.BIG-text {
		text-align: center;
	}

	.animation {
		animation: turnicamento 4s infinite;
	}

	@keyframes turnicamento {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-359deg);
		}
	}
</style>
