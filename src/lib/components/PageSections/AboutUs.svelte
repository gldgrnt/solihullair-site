<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import Section from '../Section.svelte';

	let isDesktop: boolean;
	let isSmallScreen: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => {
		isDesktop = width > 767;
		isSmallScreen = width < 999;
	});
</script>

<Section background="cobalt">
	<Container>
		<Grid align="center">
			<GridItem span={isDesktop ? '5' : '4'}>
				<Flex justify={isDesktop ? 'flex-end' : 'flex-start'}>
					<img src="./map.svg" alt="" />
				</Flex>
			</GridItem>
			<GridItem span={isDesktop ? '6 / 13' : '4'}>
				<Flex direction="column" gap="var(--sa-spacing-lg)">
					<p class="emphasis">
						We're based in Solihull but we cover the <strong
							>Midlands, Worcestershire, Shropshire</strong
						>.
					</p>
					{#if !isSmallScreen}
						<p>
							Morbi id mauris sit amet odio dapibus sodales. Nulla ac sagittis elit. Proin tempor,
							purus eget tincidunt aliquet, enim nisl pharetra arcu, sed porttitor ligula tortor at
							ligula. Aenean rhoncus consequat egestas.
						</p>
					{/if}
					<a href="/about">Read more</a>
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
		font-weight: 300;

		strong {
			font-weight: 600;
		}
	}

	a {
		font-weight: 900;
		text-decoration: underline;
	}
</style>
