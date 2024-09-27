<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Container from '$lib/components/Container.svelte';
	import GetInTouch from '$lib/components/PageSections/GetInTouch.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
	import Services from '$lib/components/PageSections/Services';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	import { services } from './data';
</script>

<PageTitle title="Residential" />

<Section>
	<Container>
		Air conditioning offers an incredibly efficient and cost-effective way to both cool and heat
		your home.
		<!-- <ImageCarousel /> -->
	</Container>
</Section>

<Services title="For residential properties, SolihullAir can offer the following services:">
	{#each services as { title, description }}
		<Services.Item {title} {description} />
	{/each}
</Services>

<GetInTouch />
