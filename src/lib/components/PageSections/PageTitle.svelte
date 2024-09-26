<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Section from '../Section.svelte';
	import { getContext } from 'svelte';

	export let title: string;
	export let description: string;

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<Section background="cobalt">
	<Container paddingBlock="120px">
		<Flex
			direction="column"
			align={isDesktop ? 'center' : 'flex-start'}
			gap={isDesktop ? '40px' : 'var(--sa-spacing-md)'}
		>
			<h1 class="h1">{title}</h1>
			<p>{description}</p>
		</Flex>
	</Container>
</Section>

<style lang="scss">
	p {
		font-size: var(--sa-font-size-subheading);
		text-align: center;
		font-weight: 400;

		@media screen and (max-width: 767px) {
			text-align: left;
		}
	}
</style>
