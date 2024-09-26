<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let justify = 'flex-start';
	export let align = 'flex-start';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));

	$: template = isDesktop ? 'repeat(12, 1fr)' : 'repeat(4, 1fr)';
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
