<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import {
		desktopStore,
		mobileStore,
		monitorStore,
		setBreakpointContext,
		tabletStore
	} from './context';

	$: innerWidth = 0;

	// Remove after migration
	const innerWidthStore = writable(innerWidth);
	setContext('innerWidth', innerWidthStore);
	$: innerWidthStore.set(innerWidth);

	// Breakpoints
	setContext('mobile', mobileStore);
	setContext('tablet', tabletStore);
	setContext('desktop', desktopStore);
	setContext('monitor', monitorStore);

	$: setBreakpointContext(innerWidth);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 0}
	<slot />
{/if}
