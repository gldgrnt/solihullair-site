<script lang="ts">
	export let background = 'sa-colour-snow';
</script>

<section class="container" style="--background-color: var(--{background});"><slot /></section>

<style lang="scss">
	.container {
		background-color: var(--background-color);
		padding: 60px 80px;

		@media screen and (max-width: 767px) {
			padding: 40px var(--sa-spacing-md);
		}
	}
</style>
