<script>
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import IconButton from '../IconButton.svelte';
	import Facebook from '../Icons/Facebook.svelte';
	import Instagram from '../Icons/Instagram.svelte';
	import Whatsapp from '../Icons/Whatsapp.svelte';
	import Divider from './Divider.svelte';
	import LinkSection from './LinkSection.svelte';

	import { getContext } from 'svelte';
	let breakpoint = getContext('breakpoint');
</script>

<footer>
	<Container>
		<Grid --justify="space-between">
			<GridItem span={breakpoint === 'desktop' ? '3' : '4'}>
				<a href="/"><img class="footer__logo" src="/logo-bw.svg" alt="Solihull Air Logo" /></a>
			</GridItem>
			<GridItem
				span={breakpoint === 'desktop' ? '7 / 13' : '4'}
				justify={breakpoint === 'desktop' ? 'flex-end' : 'flex-start'}
			>
				<Flex
					gap={breakpoint === 'desktop' ? 'clamp(16px, 5vw, 120px)' : 'var(--sa-spacing-lg)'}
					direction={breakpoint === 'desktop' ? 'row' : 'column'}
				>
					<LinkSection direction="row">
						<h3 slot="title" class="h5">Social</h3>
						<IconButton small variant="carbon" as="a" href="/" target="_blank">
							<Whatsapp />
						</IconButton>
						<IconButton small variant="carbon" as="a" href="/" target="_blank">
							<Instagram />
						</IconButton>
						<IconButton small variant="carbon" as="a" href="/" target="_blank">
							<Facebook />
						</IconButton>
					</LinkSection>
					<LinkSection>
						<h3 slot="title" class="h5">Contact</h3>
						<a href="tel:07123 456 789">07123 456 789</a>
						<a href="mailto:zeph@solihullair.co.uk">zeph@solihullair.co.uk</a>
					</LinkSection>
					<LinkSection>
						<h3 slot="title" class="h5">Services</h3>
						<a href="/services/residential">Residential</a>
						<a href="/services/commerical">Commerical</a>
					</LinkSection>
				</Flex>
			</GridItem>
		</Grid>
		<Divider />
		<Grid>
			<GridItem span="6"><span>Copyright © 2024 SolihullAir</span></GridItem>
			<GridItem span="6 / 13" justify="flex-end"><span>Website by GG</span></GridItem>
		</Grid>
	</Container>
</footer>

<style lang="scss">
	.footer__logo {
		width: 100%;
		max-width: 200px;
	}

	span {
		font-size: var(--sa-font-size-tiny);
	}
</style>
