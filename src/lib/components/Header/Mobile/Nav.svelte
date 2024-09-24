<script lang="ts">
	import type { Navigation } from '../types';

	export let links: Navigation['links'];
	export let currentRoute: Navigation['currentRoute'];
</script>

<nav>
	<ul>
		{#each links as { href, text }}
			<li><a class:active={currentRoute === href} {href}>{text}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style-type: none;
		padding: 60px 0;
		margin: 0;
		gap: 20px;
	}

	a {
		font-family: 'Lexend', Arial, Helvetica, sans-serif;
		font-weight: 900;
		text-decoration: none;
		color: var(--sa-colour-carbon);
		display: inline-block;
		font-size: 32px;
		line-height: 1.5;

		&.active {
			color: var(--sa-colour-ember);
		}
	}
</style>
