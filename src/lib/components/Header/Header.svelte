<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Button from '../Button.svelte';
	import HeaderLink from './HeaderLink.svelte';

	const links = [
		{
			href: '/about',
			text: 'About'
		},
		{
			href: '/services/residential',
			text: 'Residential'
		},
		{
			href: '/services/commercial',
			text: 'Commerical'
		}
	];

	let currentRoute = '';
	afterNavigate(({ to }) => (currentRoute = to?.route.id || ''));
</script>

<header class="header">
	<a href="/"><img class="header__logo" src="/logo.svg" alt="Solihull Air Logo" /></a>
	<nav>
		<ul class="header__link-list">
			{#each links as { href, text }}
				<li><HeaderLink {href} active={currentRoute === href}>{text}</HeaderLink></li>
			{/each}
			<li><Button as="a" href="/contact">Contact</Button></li>
		</ul>
	</nav>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--sa-spacing-md) var(--sa-spacing-xl);
		background-color: var(--sa-colour-snow);
	}

	.header__logo {
		height: 50px;
	}

	.header__link-list {
		display: flex;
		gap: var(--sa-spacing-lg);
		list-style-type: none;
		margin: 0;
		align-items: center;
	}
</style>
