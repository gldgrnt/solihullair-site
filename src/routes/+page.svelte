<script lang="ts">
	type Event = UIEvent & { currentTarget: EventTarget & Window };

	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import Container from '$lib/components/Container.svelte';

	$: innerWidth = 0;
	let breakpoint = writable(innerWidth > 767 ? 'desktop' : 'mobile');
	setContext('breakpoint', breakpoint);
	console.log(breakpoint);
</script>

<svelte:window bind:innerWidth />
<Container background="sa-colour-ember">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Container>

<style>
	h1 {
		color: var(--sa-colour-aquamarine);
	}
</style>
