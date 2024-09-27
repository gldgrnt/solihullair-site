<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../../Container.svelte';
	import Section from '../../Section.svelte';

	export let title: string;

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));
</script>

<Section background="platinum">
	<Container>
		<h2 class="h3">{title}</h2>
		<div class="service-list">
			<slot />
		</div>
	</Container>
</Section>

<style lang="scss">
	.service-list {
		padding-top: 40px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 80px;
		row-gap: 60px;

		@media screen and (max-width: 767px) {
			grid-template-columns: 1fr;
			row-gap: 30px;
		}
	}

	.h3 {
		line-height: var(--sa-line-height-body);
	}
</style>
