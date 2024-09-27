<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import '$lib/styles/index.scss';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	$: innerWidth = 0;
	const innerWidthStore = writable(innerWidth);

	setContext('innerWidth', innerWidthStore);
	$: innerWidthStore.set(innerWidth);

	// Breakpoints
	const onMobile = writable(false);
	setContext('onMobile', onMobile);
	$: onMobile.set(innerWidth < 576);

	const onTablet = writable(false);
	setContext('onTablet', onTablet);
	$: onTablet.set(innerWidth < 800);

	const onDesktop = writable(false);
	const x = { subscribe: onDesktop.subscribe };
	setContext('onDesktop', x);
	$: onDesktop.set(innerWidth < 1079);

	const onMonitor = writable(false);
	setContext('onMonitor', onMonitor);
	$: onMonitor.set(innerWidth > 1080);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 0}
	<Layout>
		<slot />
	</Layout>
{/if}
