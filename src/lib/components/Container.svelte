<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let paddingBlock = '60px';
	export let paddingInline = '80px';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));

	$: pb = isDesktop ? paddingBlock : '40px';
	$: pi = isDesktop ? paddingInline : 'var(--sa-spacing-md)';
</script>

<div class="container" style="--padding-block: {pb}; --padding-inline: {pi};">
	<slot />
</div>

<style lang="scss">
	.container {
		padding-block: var(--padding-block);
		padding-inline: var(--padding-inline);
		max-width: 1280px;
		margin: auto;
	}
</style>
