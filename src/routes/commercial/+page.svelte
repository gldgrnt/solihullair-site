<script lang="ts">
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
	import Services from '$lib/components/PageSections/Services';

	import { meta, pageTitle, servicesTitle, services, photos } from './commercial.content';
</script>

<PageMeta title={meta.title} description={meta.description} />

<PageTitle title={pageTitle.title} description={pageTitle.description} />

<Services title={servicesTitle}>
	{#each services as service}
		<Services.Item {...service} />
	{/each}
</Services>

<ImageCarousel {photos} />
