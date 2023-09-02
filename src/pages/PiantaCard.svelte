<script>
	export let text, img;
</script>

<div>
	<!-- card-basilico -->
	<div class="card">
		<img src={img} alt="homepage-card-basilico" height="100%" width="100%" />
		<div class="card_text">
			<h1>{text}</h1>
		</div>
	</div>
</div>

<style>
	.card {
		width: 90%;
		height: 180px;
	}

	.card_text {
		margin-top: -25%;
		padding-left: 5%;
		color: #ffffff;
	}
</style>
