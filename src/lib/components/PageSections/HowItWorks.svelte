<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import Calendar from '../Icons/Calendar.svelte';
	import Section from '../Section.svelte';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<Section background="platinum">
	<div class="how-it-works">
		<Container>
			<Grid>
				<GridItem span="12">
					<h2 class="h2">We offer:</h2>
				</GridItem>
			</Grid>
			<Grid>
				<GridItem span={isDesktop ? '5' : '4'}>
					<Flex direction="column" gap="var(--sa-spacing-md)">
						<Calendar />
						<h3 class="h3">Suspendisse nec tortor urna.</h3>
						<p>
							Proin tempor, purus eget tincidunt aliquet, enim nisl pharetra arcu, sed porttitor
							ligula tortor at ligula.
						</p>
					</Flex>
				</GridItem>
				<GridItem span={isDesktop ? '5 / 12' : '4'}>
					<Flex direction="column" gap="var(--sa-spacing-md)">
						<Calendar />
						<h3 class="h3">Suspendisse nec tortor urna.</h3>
						<p>
							Proin tempor, purus eget tincidunt aliquet, enim nisl pharetra arcu, sed porttitor
							ligula tortor at ligula.
						</p>
					</Flex>
				</GridItem>
				<GridItem span={isDesktop ? '5' : '4'}>
					<Flex direction="column" gap="var(--sa-spacing-md)">
						<Calendar />
						<h3 class="h3">Suspendisse nec tortor urna.</h3>
						<p>
							Proin tempor, purus eget tincidunt aliquet, enim nisl pharetra arcu, sed porttitor
							ligula tortor at ligula.
						</p>
					</Flex>
				</GridItem>
				<GridItem span={isDesktop ? '5 / 12' : '4'}>
					<Flex direction="column" gap="var(--sa-spacing-md)">
						<Calendar />
						<h3 class="h3">Suspendisse nec tortor urna.</h3>
						<p>
							Proin tempor, purus eget tincidunt aliquet, enim nisl pharetra arcu, sed porttitor
							ligula tortor at ligula.
						</p>
					</Flex>
				</GridItem>
			</Grid>
		</Container>
	</div>
</Section>

<style lang="scss">
	.how-it-works {
		:global(svg) {
			width: 48px;
			height: 48px;
		}
	}

	h2 {
		margin-bottom: 40px;
	}

	p {
		margin-bottom: 30px;

		@media screen and (max-width: 767px) {
			margin-bottom: var(--sa-spacing-md);
		}
	}
</style>
