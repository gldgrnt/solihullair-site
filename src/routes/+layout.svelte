<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import '$lib/styles/index.scss';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	$: innerWidth = 0;
	let isDesktop = writable('desktop');
	setContext('isDesktop', isDesktop);
	$isDesktop = innerWidth > 767 ? 'desktop' : 'mobile';
</script>

<svelte:window bind:innerWidth />
<Layout>
	<slot />
</Layout>
