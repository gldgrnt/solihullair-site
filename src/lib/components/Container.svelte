<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let paddingBlock = '60px';
	export let paddingInline = '80px';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));

	const mobilePaddingBlock = '40px';
	const mobilePaddingInline = 'var(--sa-spacing-md)';
</script>

<div
	style:padding-block={isDesktop ? paddingBlock : mobilePaddingBlock}
	style:padding-inline={isDesktop ? paddingInline : mobilePaddingInline}
>
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss">
	.container {
		max-width: 1100px;
		margin: auto;
	}
</style>
