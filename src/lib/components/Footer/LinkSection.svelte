<script lang="ts">
	import { getContext } from 'svelte';
	import Flex from '../Flex.svelte';
	let isDesktop = getContext('isDesktop');

	export let direction: 'row' | 'column' = 'column';
	$: align = isDesktop ? 'flex-end' : 'flex-start';
	let gap = 'var(--sa-spacing-sm)';
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
