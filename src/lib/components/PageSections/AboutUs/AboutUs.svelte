<script lang="ts">
	import Container from '../../Container.svelte';
	import Flex from '../../Flex.svelte';
	import Grid from '../../Grid/Grid.svelte';
	import GridItem from '../../Grid/GridItem.svelte';
	import Section from '../../Section.svelte';
	import Link from '../../Link.svelte';
	import EmphasisedText from '$lib/components/EmphasisedText.svelte';
	import { getBreakpointContext } from '$lib/context/context';

	import { text, link } from './content';

	export let showLink = true;

	let onTablet = getBreakpointContext('tablet');
</script>

<Section background="cobalt">
	<Container>
		<Grid align="center">
			<GridItem span={$onTablet ? '4' : '5'}>
				<Flex justify={$onTablet ? 'flex-start' : 'flex-end'}>
					<img
						src="/coverage-map.svg"
						alt="Map of areas covered by SolihullAir, including the Midlands, Worcestershire, Shropshire"
					/>
				</Flex>
			</GridItem>
			<GridItem span={$onTablet ? '4' : '6 / 13'}>
				<Flex direction="column" gap="var(--sa-spacing-lg)">
					<EmphasisedText type="thin">{text.emphasised}</EmphasisedText>
					<p>{text.normal}</p>
					{#if showLink}
						<Link href={link.href} aria-label={link['aria-label']}>{link.text}</Link>
					{/if}
				</Flex>
			</GridItem>
		</Grid>
	</Container>
</Section>

<style lang="scss">
	img {
		width: 100%;
		max-width: 500px;

		@media screen and (max-width: 799px) {
			margin-bottom: 40px;
		}
	}
</style>
