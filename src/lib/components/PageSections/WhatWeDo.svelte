<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Section from '../Section.svelte';
	import ServiceCard from '../ServiceCard.svelte';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 567));
</script>

<div class="page-section-why-choose-us">
	<Section>
		<Container>
			<h2 class="h2">What we do</h2>
			<Flex
				gap="clamp(40px, 5vw, 120px);"
				justify="center"
				direction={isDesktop ? 'row' : 'column'}
			>
				<ServiceCard
					href="/residential"
					src="/residential.png?w=400&h=300&format=webp"
					label="Read more about our commercial air conditioning services"
				>
					<h3 slot="title" class="h3">Residential</h3>
					<p slot="description">
						Ensure year-round comfort with our efficient and energy-saving air conditioning systems.
					</p>
				</ServiceCard>
				<ServiceCard
					href="/residential"
					src="/commercial.jpg?w=400&h=300&format=webp"
					label="Read more about our commercial air conditioning services"
				>
					<h3 slot="title" class="h3">Commercial</h3>
					<p slot="description">
						Keep your business running smoothly with our reliable, energy-efficient air conditioning
						systems.
					</p>
				</ServiceCard>
			</Flex>
		</Container>
	</Section>
</div>

<style lang="scss">
	h2 {
		text-align: center;
		margin-bottom: 40px;

		@media screen and (max-width: 767px) {
			text-align: left;
		}
	}
</style>
