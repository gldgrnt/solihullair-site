<script lang="ts">
	import GetInTouch from '$lib/components/PageSections/GetInTouch.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
	import Services from '$lib/components/PageSections/Services';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';

	import { services, photos } from './data';
</script>

<PageMeta
	title="Residential air conditioning services"
	description="Expert residential air conditioning services including installation, repair, and maintenance. Keep your home cool and comfortable with energy-efficient solutions tailored to your needs."
/>

<PageTitle
	title="Residential"
	description="Air conditioning offers an incredibly efficient and cost-effective way to both cool and heat
		your home."
/>

<Services title="For residential properties, SolihullAir can offer the following services:">
	{#each services as service}
		<Services.Item {...service} />
	{/each}
</Services>

<ImageCarousel {photos} />

<GetInTouch />
