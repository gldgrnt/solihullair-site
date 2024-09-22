<script>
	import Container from './Container.svelte';
	import Grid from './Grid/Grid.svelte';
	import GridItem from './Grid/GridItem.svelte';
</script>

<footer>
	<Container>
		<Grid>
			<GridItem span={5}>
				<a href="/"><img class="footer__logo" src="/logo-bw.svg" alt="Solihull Air Logo" /></a>
			</GridItem>
		</Grid>
	</Container>
</footer>

<style lang="scss">
	.footer__logo {
		max-height: 75px;
	}
</style>
