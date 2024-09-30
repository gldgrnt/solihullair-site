<script lang="ts">
	import Flex from '$lib/components/Flex.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import Facebook from '$lib/components/Icons/Facebook.svelte';
	import Instagram from '$lib/components/Icons/Instagram.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import GetInTouch from '$lib/components/PageSections/GetInTouch.svelte';
	import PageIntro from '$lib/components/PageSections/PageIntro.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';

	import { email, phone, social } from '$lib/data/meta';
</script>

<PageMeta
	title="Contact us"
	description="Get in touch with our air conditioning experts today for all your residential or commercial HVAC needs."
/>

<PageTitle title="Get in touch" />

<PageIntro src="/services/photos/commercial-0.jpg">
	<Flex direction="column" gap="var(--sa-spacing-lg)">
		<h2 class="h2">Contact details</h2>
		<Flex direction="column" gap="var(--sa-spacing-xs)">
			<h3 class="h5">Phone</h3>
			<span>{phone.text}</span>
		</Flex>
		<Flex direction="column" gap="var(--sa-spacing-xs)">
			<h3 class="h5">Email</h3>
			<span>{email.text}</span>
		</Flex>
		<Flex direction="column" gap="var(--sa-spacing-sm)">
			<h3 class="h5">Social media</h3>
			<Flex gap="var(--sa-spacing-xs)" align="flex-end">
				<IconButton as="a" variant="carbon" small href={social.facebook}>
					<Facebook />
				</IconButton>
				<span>/solihullair</span>
			</Flex>
			<Flex gap="var(--sa-spacing-xs)" align="flex-end">
				<IconButton as="a" variant="carbon" small href={social.instagram}>
					<Instagram />
				</IconButton>
				<span>@solihullair</span>
			</Flex>
		</Flex>
	</Flex>
</PageIntro>

<GetInTouch />

<style lang="scss">
	h3 {
		font-size: var(--sa-font-size-body);
	}
</style>
