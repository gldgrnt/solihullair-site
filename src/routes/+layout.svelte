<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import '$lib/styles/index.scss';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	$: innerWidth = 0;
	const innerWidthStore = writable(innerWidth);

	setContext('innerWidth', innerWidthStore);
	$: innerWidthStore.set(innerWidth);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 0}
	<Layout>
		<slot />
	</Layout>
{/if}
