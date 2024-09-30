<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Grid from '../Grid/Grid.svelte';
	import GridItem from '../Grid/GridItem.svelte';
	import IconButton from '../IconButton.svelte';
	import Facebook from '../Icons/Facebook.svelte';
	import Instagram from '../Icons/Instagram.svelte';
	import Whatsapp from '../Icons/Whatsapp.svelte';
	import Divider from './Divider.svelte';
	import LinkSection from './LinkSection.svelte';

	import { social, phone, email } from '$lib/data/meta';

	let onDesktop = getContext('onDesktop');

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (onDesktop = width > 767));

	const socialLinks = [
		{
			label: 'Whatsapp call',
			Icon: Whatsapp,
			href: social.whatsapp
		},
		{
			label: 'instagram',
			Icon: Instagram,
			href: social.instagram
		},
		{
			label: 'facebook',
			Icon: Facebook,
			href: social.facebook
		}
	];
</script>

<footer>
	<Container paddingBlock="60px 30px">
		<Grid justify="space-between">
			{#if onDesktop}
				<GridItem span={onDesktop ? '3' : '4'}>
					<a href="/"
						><img
							class="footer__logo"
							src="/logos/solihullair-logo-bw.svg"
							alt="SolihullAir Logo"
						/></a
					>
				</GridItem>
			{/if}
			<GridItem span={onDesktop ? '7 / 13' : '4'}>
				<Flex
					gap={onDesktop ? 'clamp(16px, 5vw, 120px)' : '40px'}
					direction={onDesktop ? 'row' : 'column'}
					justify={onDesktop ? 'flex-end' : 'flex-start'}
				>
					<LinkSection direction="row">
						<h3 slot="title" class="h5">Social</h3>
						{#each socialLinks as { label, href, Icon }}
							<IconButton
								small
								variant="carbon"
								as="a"
								{href}
								target="_blank"
								aria-label="SolihullAir {label}"
							>
								<Icon />
							</IconButton>
						{/each}
					</LinkSection>
					<LinkSection>
						<h3 slot="title" class="h5">Contact</h3>
						<a href={phone.link}>{phone.text}</a>
						<a href={email.link}>{email.text}</a>
					</LinkSection>
					<LinkSection>
						<h3 slot="title" class="h5">Services</h3>
						<a href="/residential">Residential</a>
						<a href="/commercial">Commerical</a>
					</LinkSection>
				</Flex>
			</GridItem>
			<GridItem span="12">
				<Divider />
			</GridItem>
		</Grid>
		<Grid justify={onDesktop ? 'space-between' : 'flex-start'}>
			<GridItem span="4">
				<span>Copyright © 2024 SolihullAir</span>
			</GridItem>
			<GridItem span={onDesktop ? '4 / 13' : '4'}>
				<a href="https://github.com/gldgrnt" target="_blank">
					<Flex justify={onDesktop ? 'flex-end' : 'flex-start'} gap="var(--sa-spacing-xs)">
						<span>Website by </span><img src="/logos/gldgrnt.svg" alt="GldGrant logo" />
					</Flex>
				</a>
			</GridItem>
		</Grid>
	</Container>
</footer>

<style lang="scss">
	.footer__logo {
		width: 100%;
		max-width: 200px;
	}

	span {
		font-size: var(--sa-font-size-tiny);
	}
</style>
