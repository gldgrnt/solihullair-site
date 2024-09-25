<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

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

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<footer>
	<Container paddingBlock="60px 30px">
		<Grid justify="space-between">
			<GridItem span={isDesktop ? '3' : '4'}>
				<a href="/"><img class="footer__logo" src="/logo-bw.svg" alt="Solihull Air Logo" /></a>
			</GridItem>
			<GridItem span={isDesktop ? '7 / 13' : '4'} justify={isDesktop ? 'flex-end' : 'flex-start'}>
				<Flex
					gap={isDesktop ? 'clamp(16px, 5vw, 120px)' : '40px'}
					direction={isDesktop ? 'row' : 'column'}
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
		<Grid justify={isDesktop ? 'space-between' : 'flex-start'}>
			<GridItem span="4"><span>Copyright © 2024 SolihullAir</span></GridItem>
			<GridItem span={isDesktop ? '4 / 13' : '4'} justify={isDesktop ? 'flex-end' : 'flex-start'}
				><span>Website by GG</span></GridItem
			>
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
