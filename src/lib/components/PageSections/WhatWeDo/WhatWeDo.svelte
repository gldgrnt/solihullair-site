<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Container from '../../Container.svelte';
	import Flex from '../../Flex.svelte';
	import Section from '../../Section.svelte';
	import ServiceCard from '../../ServiceCard.svelte';

	import { serviceCards } from './content';

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
				{#each serviceCards as card}
					<ServiceCard {...card} />
				{/each}
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
