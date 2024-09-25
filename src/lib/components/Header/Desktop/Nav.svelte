<script lang="ts">
	import NavLink from './NavLink.svelte';
	import type { Navigation } from '../types';
	import Button from '$lib/components/Button.svelte';

	export let links: Navigation['links'];
	export let currentRoute: Navigation['currentRoute'];

	const [buttonLink, ...rest] = [...links].reverse();
	const textLinks = rest.reverse();
</script>

<nav class="desktop-navigation">
	<ul class="desktop-navigation">
		{#each textLinks as { href, text }}
			<li><NavLink {href} active={currentRoute === href}>{text}</NavLink></li>
		{/each}
		<li><Button as="a" type="ember" href={buttonLink.href}>{buttonLink.text}</Button></li>
	</ul>
</nav>

<style lang="scss">
	ul {
		display: flex;
		gap: var(--sa-spacing-lg);
		list-style-type: none;
		margin: 0;
		align-items: center;
	}
</style>
