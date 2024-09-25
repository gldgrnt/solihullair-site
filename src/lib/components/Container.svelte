<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let paddingBlock = '60px';
	export let paddingInline = '80px';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));

	const mobilePadding = '40px';
	$: pb = isDesktop ? paddingBlock : mobilePadding;
	$: pi = isDesktop ? paddingInline : mobilePadding;
</script>

<div class="container" style="--padding-block: {pb}; --padding-inline: {pi};">
	<slot />
</div>

<style lang="scss">
	.container {
		padding-block: var(--padding-block);
		padding-inline: var(--padding-inline);
	}
</style>
