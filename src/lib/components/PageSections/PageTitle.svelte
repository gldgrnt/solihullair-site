<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Section from '../Section.svelte';
	import { getContext } from 'svelte';

	export let title: string;

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<Section background="cobalt">
	<Container>
		<Flex direction="column" align="center" gap={isDesktop ? '40px' : 'var(--sa-spacing-md)'}>
			<h1 class="h1">{title}</h1>
		</Flex>
	</Container>
</Section>
