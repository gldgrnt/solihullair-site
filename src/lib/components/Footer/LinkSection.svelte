<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Flex from '../Flex.svelte';

	export let direction: 'row' | 'column' = 'column';

	let isDesktop: boolean;
	let gap = 'var(--sa-spacing-sm)';

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));

	$: align = isDesktop ? 'flex-end' : 'flex-start';
</script>

<section>
	<Flex direction="column" {gap} {align}>
		<slot name="title">Title</slot>
		<Flex {direction} {gap} {align}>
			<slot />
		</Flex>
	</Flex>
</section>

<style lang="scss">
	section {
		:global(h3) {
			margin: 0;
		}

		:global(a) {
			font-size: var(--sa-font-size-small);
		}
	}
</style>
