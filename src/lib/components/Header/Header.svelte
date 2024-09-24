<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import DesktopNav from './Desktop/Nav.svelte';
	import BurgerMenu from './Mobile/BurgerMenu.svelte';
	import MobileNav from './Mobile/Nav.svelte';

	// Site links
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
			text: 'Commercial'
		},
		{
			href: '/contact',
			text: 'Contact'
		}
	];

	// Mobile navigation show/hide
	let showMobileNavigation = false;
	function handleBurgerMenuClick() {
		showMobileNavigation = !showMobileNavigation;
		const body = document.querySelector('body');

		if (body) {
			if (showMobileNavigation) {
				body.style.height = '100vh';
				body.style.overflow = 'hidden';
			} else {
				body.style.height = '';
				body.style.overflow = '';
			}
		}
	}

	// Current site path
	let currentRoute = '';
	afterNavigate(({ to }) => {
		currentRoute = to?.route.id || '';
		showMobileNavigation = false;
	});
</script>

<header class:mobile-nav-open={showMobileNavigation}>
	<div class="header">
		<a href="/"><img class="header__logo" src="/logo.svg" alt="Solihull Air Logo" /></a>
		<div class="header__desktop">
			<DesktopNav {currentRoute} {links} />
		</div>
		<div class="header__mobile">
			<BurgerMenu active={showMobileNavigation} onClick={handleBurgerMenuClick} />
		</div>
	</div>
	{#if showMobileNavigation}
		<div class="header__mobile-navigation"><MobileNav {currentRoute} {links} /></div>
	{/if}
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

		&.mobile-nav-open {
			height: 100vh;
		}
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--sa-spacing-md) var(--sa-spacing-xl);
		background-color: var(--sa-colour-snow);
		position: relative;
		z-index: 1;
	}

	.header__logo {
		height: 50px;
	}

	[class^='header__mobile'] {
		display: none;
	}

	.header__mobile-navigation {
		flex: 1;
		background-color: var(--sa-colour-platinum);
	}

	@media screen and (max-width: 767px) {
		.header {
			padding: var(--sa-spacing-md);
		}

		[class^='header__mobile'] {
			display: block;
		}

		.header__mobile {
			display: flex;
			gap: var(--sa-spacing-sm);
		}

		.header__desktop {
			display: none;
		}
	}
</style>
