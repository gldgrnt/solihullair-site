<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Section from '../Section.svelte';
	import { getContext } from 'svelte';
	import Grid from '../Grid';

	export let title: string;
	export let description = '';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<Section background="cobalt">
	<Container>
		<Grid>
			<Grid.Item span={isDesktop ? '10 / 12' : '4'}>
				<Flex direction="column" align="stretch" gap={isDesktop ? '40px' : 'var(--sa-spacing-md)'}>
					<h1 class="h1">{title}</h1>
					{#if description}
						<p>{description}</p>
					{/if}
				</Flex>
			</Grid.Item>
		</Grid>
	</Container>
</Section>

<style lang="scss">
	h1,
	p {
		text-align: center;

		@media screen and (max-width: 767px) {
			text-align: left;
		}
	}
</style>
