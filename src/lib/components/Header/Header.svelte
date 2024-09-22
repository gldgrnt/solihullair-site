<script lang="ts">
	import HeaderLink from './HeaderLink.svelte';

	const links = ['About', 'Residential', 'Commercial', 'Contact'];
</script>

<header class="header">
	<a href="/"><img class="header__logo" src="/logo.svg" alt="Solihull Air Logo" /></a>
	<nav>
		<ul class="header__link-list">
			{#each links as link}
				<li><HeaderLink href={`/${link.toLowerCase()}`}>{link}</HeaderLink></li>
			{/each}
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
	}
</style>
