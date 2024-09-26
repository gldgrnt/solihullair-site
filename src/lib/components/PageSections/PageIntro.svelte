<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import Section from '../Section.svelte';

	export let src: string;

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<Section>
	<Container paddingBlock="80px">
		<Grid align="center">
			<GridItem span={isDesktop ? '5' : '4'}>
				<Flex justify="center">
					<div style="background-image: url('{src}');" />
				</Flex>
			</GridItem>
			<GridItem span={isDesktop ? '6 / 13' : '4'}><slot /></GridItem>
		</Grid>
	</Container>
</Section>

<style lang="scss">
	div {
		aspect-ratio: 1;
		width: 100%;
		max-width: 450px;
		background-size: cover;
		border-radius: 40px;
		border-bottom-right-radius: 0;

		@media screen and (max-width: 767px) {
			max-width: none;
			margin-bottom: var(--sa-spacing-md);
		}
	}
</style>
