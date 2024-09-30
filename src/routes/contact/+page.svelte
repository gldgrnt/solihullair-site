<script lang="ts">
	import Flex from '$lib/components/Flex.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import PageIntro from '$lib/components/PageSections/PageIntro.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';

	import {
		meta,
		pageTitle,
		pageIntro,
		contactDetails,
		socialLinks,
		socialLinksTitle
	} from './contact.content';
</script>

<PageMeta title={meta.title} description={meta.description} />

<PageTitle title={pageTitle} />

<PageIntro src="/services/photos/commercial-0.jpg">
	<Flex direction="column" gap="var(--sa-spacing-lg)">
		<h2 class="h2">{pageIntro.title}</h2>
		{#each contactDetails as { title, text }}
			<Flex direction="column" gap="var(--sa-spacing-xs)">
				<h3 class="h5">{title}</h3>
				<span>{text}</span>
			</Flex>
		{/each}
		<Flex direction="column" gap="var(--sa-spacing-sm)">
			<h3 class="h5">{socialLinksTitle}</h3>
			{#each socialLinks as { Icon, link }}
				<Flex gap="var(--sa-spacing-xs)" align="flex-end">
					<IconButton as="span" variant="carbon" small>
						<Icon />
					</IconButton>
					{@const { href, text } = link}
					<a {href} aria-label={link['aria-label']}>{text}</a>
				</Flex>
			{/each}
		</Flex>
	</Flex>
</PageIntro>

<style lang="scss">
	h3 {
		font-size: var(--sa-font-size-body);
	}
</style>
