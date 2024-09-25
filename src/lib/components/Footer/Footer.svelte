<script>
	import Container from '../Container.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import IconButton from '../IconButton.svelte';
	import Facebook from '../Icons/Facebook.svelte';
	import Instagram from '../Icons/Instagram.svelte';
	import Whatsapp from '../Icons/Whatsapp.svelte';
	import LinkSection from './LinkSection.svelte';
</script>

<footer>
	<Container>
		<Grid --justify="space-between">
			<GridItem span="3">
				<a href="/"><img class="footer__logo" src="/logo-bw.svg" alt="Solihull Air Logo" /></a>
			</GridItem>
			<GridItem span="7 / 13" justify="flex-end">
				<LinkSection direction="horizontal">
					<h3 slot="title">Social</h3>
					<IconButton small variant="carbon">
						<Whatsapp />
					</IconButton>
					<IconButton small variant="carbon">
						<Instagram />
					</IconButton>
					<IconButton small variant="carbon">
						<Facebook />
					</IconButton>
				</LinkSection>
				<LinkSection>
					<h3 slot="title">Contact</h3>
					<a href="#">07123 456 789</a>
					<a href="#">zeph@solihullair.co.uk</a>
				</LinkSection>
				<LinkSection>
					<h3 slot="title">Services</h3>
					<a href="/services/residential">Residential</a>
					<a href="/services/commerical">Commerical</a>
				</LinkSection>
			</GridItem>
		</Grid>
		<hr />
		<Grid>
			<GridItem span="6">Copyright © 2024 SolihullAir</GridItem>
			<GridItem span="6 / 13" justify="flex-end">Website by GG</GridItem>
		</Grid>
	</Container>
</footer>

<style lang="scss">
	.footer__logo {
		width: 100%;
		max-width: 200px;
	}
</style>
