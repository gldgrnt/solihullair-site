<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import IconButton from '../IconButton.svelte';
	import Burger from '../Icons/Burger.svelte';
	import Phone from '../Icons/Phone.svelte';
	import DesktopNav from './Desktop/Nav.svelte';
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

	const disableBodyScroll = () => {
		const body = document.querySelector('body');

		if (body) {
			body.style.height = '100vh';
			body.style.overflow = 'hidden';
		}
	};

	const enableBodyScroll = () => {
		const body = document.querySelector('body');

		if (body) {
			body.style.height = '';
			body.style.overflow = '';
		}
	};

	// Mobile navigation show/hide
	let showMobileNavigation = false;
	function handleBurgerMenuClick() {
		showMobileNavigation = !showMobileNavigation;
		const body = document.querySelector('body');

		if (body) {
			if (showMobileNavigation) disableBodyScroll();
			else enableBodyScroll();
		}
	}

	// Current site path
	let currentRoute = '';
	afterNavigate(({ to }) => {
		currentRoute = to?.route.id || '';
		showMobileNavigation = false;
		enableBodyScroll();
	});

	// Remove overflow if swapping between
	const handleResize = (e: UIEvent & { currentTarget: EventTarget & Window }) => {
		const isDesktop = e.currentTarget.innerWidth > 767;

		if (isDesktop) {
			showMobileNavigation = false;
			enableBodyScroll();
		}
	};
</script>

<svelte:window on:resize={handleResize} />
<header class:mobile-nav-open={showMobileNavigation}>
	<div class="header">
		<a href="/" class="header__logo"><img src="/logo.svg" alt="Solihull Air Logo" /></a>
		<div class="header__desktop">
			<DesktopNav {currentRoute} {links} />
		</div>
		<div class="header__mobile">
			<IconButton variant="cobalt" as="a" href="tel:+44000000000" aria-label="Call SolihullAir">
				<Phone />
			</IconButton>
			<IconButton
				variant="platinum"
				active={showMobileNavigation}
				on:click={handleBurgerMenuClick}
				aria-label="Open menu"
			>
				<Burger />
			</IconButton>
		</div>
	</div>
	{#if showMobileNavigation}
		<div class="header__mobile-navigation">
			<MobileNav {currentRoute} {links} on:click={() => (showMobileNavigation = false)} />
		</div>
	{/if}
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
		z-index: 1000;

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
		display: inline-flex;

		& img {
			height: 50px;
		}
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
