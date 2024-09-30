<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	import Button from '../../Button.svelte';
	import Container from '../../Container.svelte';
	import Flex from '../../Flex.svelte';
	import Section from '../../Section.svelte';

	import { contactCards } from './content';

	let isDesktop: boolean = false;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 767));

	const containerProps = {
		paddingBlock: '120px',
		paddingInline: '0px'
	};

	$: flexProps = {
		direction: 'column',
		align: isDesktop ? 'center' : 'flex-start',
		gap: 'var(--sa-spacing-lg)'
	};
</script>

<div class="page-section-get-in-touch">
	<Flex align="stretch" direction={isDesktop ? 'row' : 'column'}>
		{#each contactCards as { background, title, description, button }}
			<Section {background}>
				<Container {...containerProps}>
					<Flex {...flexProps}>
						<h2 class="h2">{title}</h2>
						<p>{description}</p>
						{@const { colour, href, text, Icon } = button}
						<Button as="a" {colour} inverse {href}>
							<Icon slot="icon" />
							{text}
						</Button>
					</Flex>
				</Container>
			</Section>
		{/each}
	</Flex>
</div>

<style lang="scss">
	.page-section-get-in-touch {
		text-align: center;

		@media screen and (max-width: 767px) {
			text-align: left;
		}
	}

	p {
		width: clamp(300px, 75%, 450px);

		@media screen and (max-width: 767px) {
			width: auto;
		}
	}
</style>
