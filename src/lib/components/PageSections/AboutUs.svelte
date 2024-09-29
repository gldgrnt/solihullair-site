<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import Section from '../Section.svelte';
	import Link from '../Link.svelte';

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
					<img src="/map.svg" alt="" />
				</Flex>
			</GridItem>
			<GridItem span={isDesktop ? '6 / 13' : '4'}>
				<Flex direction="column" gap="var(--sa-spacing-lg)">
					<p class="emphasis">
						We're based in Solihull but we cover the Midlands, Worcestershire, Shropshire.
					</p>
					<p>
						By covering a wide area, we ensure that homeowners and businesses across the Midlands
						and surrounding counties benefit from our professional, prompt, and energy-efficient air
						conditioning solutions.
					</p>
					{#if showLink}
						<Link href="/about" aria-label="Read more about SolihullAir">Read more</Link>
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

	.emphasis {
		font-family: var(--sa-font-family-body);
		line-height: var(--sa-line-height-body);
		font-size: var(--sa-font-size-subheading);
		font-weight: 200;
	}
</style>
