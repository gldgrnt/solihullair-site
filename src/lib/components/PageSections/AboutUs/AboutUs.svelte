<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../../Container.svelte';
	import Flex from '../../Flex.svelte';
	import Grid from '../../Grid/Grid.svelte';
	import GridItem from '../../Grid/GridItem.svelte';
	import Section from '../../Section.svelte';
	import Link from '../../Link.svelte';
	import EmphasisedText from '$lib/components/EmphasisedText.svelte';

	import { text, link } from './content';

	export let showLink = true;

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<Section background="cobalt">
	<Container>
		<Grid align="center">
			<GridItem span={isDesktop ? '5' : '4'}>
				<Flex justify={isDesktop ? 'flex-end' : 'flex-start'}>
					<img
						src="/map.svg"
						alt="Map of areas covered by SolihullAir, including the Midlands, Worcestershire, Shropshire"
					/>
				</Flex>
			</GridItem>
			<GridItem span={isDesktop ? '6 / 13' : '4'}>
				<Flex direction="column" gap="var(--sa-spacing-lg)">
					<EmphasisedText>{text.emphasised}</EmphasisedText>
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

		@media screen and (max-width: 767px) {
			max-width: none;
			margin-bottom: 40px;
		}
	}
</style>
