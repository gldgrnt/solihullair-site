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
						We're based in Solihull but we cover the <strong
							>Midlands, Worcestershire, Shropshire</strong
						>.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt modi fuga nisi
						voluptates illum, at voluptatum laboriosam perspiciatis.
					</p>
					{#if showLink}
						<Link href="/about">Read more</Link>
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

		strong {
			font-weight: 600;
		}
	}
</style>
