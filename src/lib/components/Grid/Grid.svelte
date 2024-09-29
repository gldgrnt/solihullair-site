<script lang="ts">
	import { getBreakpointContext } from '$lib/context/context';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let justify = 'flex-start';
	export let align = 'flex-start';

	let onTablet = getBreakpointContext('tablet');

	$: template = $onTablet ? 'repeat(4, 1fr)' : 'repeat(12, 1fr)';
</script>

<div
	class="grid"
	style="grid-template-columns: {template}; justify-content: {justify}; align-items: {align};"
>
	<slot />
</div>

<style lang="scss">
	.grid {
		display: grid;
		gap: var(--sa-spacing-md);
	}
</style>
