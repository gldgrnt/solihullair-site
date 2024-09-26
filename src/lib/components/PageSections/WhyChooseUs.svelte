<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import Section from '../Section.svelte';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<div class="page-section-why-choose-us">
	<Section background="platinum">
		<Container>
			<h2 class="h2">Why choose us</h2>
			<Grid>
				<GridItem span={isDesktop ? '6' : '4'}>
					We are Refcom Certified company with F-Gas (REF1020074) id mauris sit amet odio dapibus
					sodales. Nulla ac sagittis elit. Proin tempor, purus eget tincidunt aliquet, enim nisl
					pharetra arcu, sed porttitor ligula tortor at ligula.
				</GridItem>
				<GridItem span={isDesktop ? '5 / 13' : '4'}>
					<Flex gap="var(--sa-spacing-xl)">
						<img src="./city-guilds-qualified.png" alt="City Guilds Qualification" />
						<img src="./refcom-gas.png" alt="Refcom F-Gas Certification" />
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
