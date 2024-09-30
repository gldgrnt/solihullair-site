<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../../Container.svelte';
	import Flex from '../../Flex.svelte';
	import Grid from '../../Grid/Grid.svelte';
	import GridItem from '../../Grid/GridItem.svelte';
	import Section from '../../Section.svelte';

	import { title, description, qualificationLogos } from './content';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<div class="page-section-why-choose-us">
	<Section background="platinum">
		<Container>
			<Grid>
				<GridItem span="12">
					<h2 class="h2">{title}</h2>
				</GridItem>
			</Grid>
			<Grid>
				<GridItem span={isDesktop ? '6' : '4'}>
					<Flex direction="column" gap="var(--sa-spacing-md)">
						{#each description as paragraph}
							<p>{paragraph}</p>
						{/each}
					</Flex>
				</GridItem>
				<GridItem span={isDesktop ? '5 / 13' : '4'}>
					<Flex gap="var(--sa-spacing-xl)">
						{#each qualificationLogos as { filename, alt }}
							<img src="/logos/{filename}.png" {alt} />
						{/each}
					</Flex>
				</GridItem>
			</Grid>
		</Container>
	</Section>
</div>

<style lang="scss">
	h2 {
		margin-bottom: var(--sa-spacing-lg);
	}

	img {
		max-height: 100px;

		@media screen and (max-width: 997px) {
			max-height: 80px;
		}

		@media screen and (max-width: 767px) {
			max-height: 70px;
			margin-top: var(--sa-spacing-md);
		}
	}
</style>
