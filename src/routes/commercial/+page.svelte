<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import GetInTouch from '$lib/components/PageSections/GetInTouch.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
	import Services from '$lib/components/PageSections/Services';
	import { services } from './data';
</script>

<PageTitle title="Commercial" />

<Container>
	Air Conditioning can help businesses maintain a comfortable environment while ensuring compliance
	with health and safety regulations.
</Container>

<Services title="SolihullAir offer a variety of commercial services, including:">
	{#each services as { title, description }}
		<Services.Item {title} {description} />
	{/each}
</Services>

<GetInTouch />
