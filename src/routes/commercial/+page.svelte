<script lang="ts">
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
	import Services from '$lib/components/PageSections/Services';

	import { services, photos } from './data';
</script>

<PageMeta
	title="Commercial air conditioning services"
	description="Professional commercial air conditioning services for businesses. From installations to routine maintenance, we ensure your commercial spaces stay cool and productive year-round."
/>

<PageTitle
	title="Commercial"
	description="Air conditioning can help businesses maintain a comfortable environment while ensuring compliance
	with health and safety regulations."
/>

<Services title="SolihullAir offer a variety of commercial services, including:">
	{#each services as service}
		<Services.Item {...service} />
	{/each}
</Services>

<ImageCarousel {photos} />
