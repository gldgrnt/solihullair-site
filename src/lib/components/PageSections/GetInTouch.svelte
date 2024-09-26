<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	import Button from '../Button.svelte';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Section from '../Section.svelte';
	import Phone from '../Icons/Phone.svelte';
	import Mail from '../Icons/Mail.svelte';

	import { phone, email } from '$lib/data/meta';

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
		<Section background="cobalt">
			<Container {...containerProps}>
				<Flex {...flexProps}>
					<h2 class="h2">Message us</h2>
					<p>
						Morbi id mauris sit amet odio dapibus sodales. Proin tempor, purus eget tincidunt nisl.
					</p>
					<Button as="a" colour="cobalt" inverse href={phone.link}>
						<Phone slot="icon" />
						07123 456 789
					</Button>
				</Flex>
			</Container>
		</Section>
		<Section background="ember">
			<Container {...containerProps}>
				<Flex {...flexProps}>
					<h2 class="h2">Get a quote</h2>
					<p>
						Morbi id mauris sit amet odio dapibus sodales. Proin tempor, purus eget tincidunt nisl.
					</p>
					<Button as="a" colour="ember" inverse href={email.link}
						><Mail slot="icon" />Email us</Button
					>
				</Flex>
			</Container>
		</Section>
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
