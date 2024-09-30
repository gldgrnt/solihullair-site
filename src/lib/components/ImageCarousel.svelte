<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import Container from './Container.svelte';
	import Section from './Section.svelte';
	import { getContext, onMount } from 'svelte';
	import Flex from './Flex.svelte';
	import Grid from './Grid';
	import type { Writable } from 'svelte/store';
	import type { ServicePhoto } from '$lib/data/types';

	let isDesktop: boolean;

	const innerWidth: Writable<number> = getContext('innerWidth');
	innerWidth.subscribe((width) => (isDesktop = width > 799));

	export let photos: ServicePhoto[] = [];

	const slides = photos.map(({ filename, alt }: ServicePhoto) => ({
		src: `/services/photos/${filename}.jpg`,
		alt
	}));

	let main: Splide;
	let thumbs: SplideSlide;

	const mainOptions: Options = {
		type: 'fade',
		perMove: 1,
		gap: '1rem',
		pagination: false,
		arrows: false
	};

	const thumbsOptions: Options = {
		type: 'slide',
		rewind: true,
		gap: '1rem',
		pagination: false,
		fixedWidth: 75,
		fixedHeight: 75,
		cover: true,
		isNavigation: true,
		updateOnMove: true,
		arrows: false,
		focus: 'center'
	};

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide);
		}
	});

	let index = 0;
	let splideId = '';

	$: index = main?.splide.index || 0;
	$: splideId = main?.splide.root.id;
</script>

<Section background="platinum">
	<Container>
		<Grid>
			<Grid.Item span={isDesktop ? '6' : '4'}>
				<Flex justify="center">
					<Splide
						options={mainOptions}
						bind:this={main}
						aria-labelledby="thumbnails-example-heading"
						on:active={(a) => (index = a.detail.Slide.index)}
					>
						{#each slides as slide}
							<SplideSlide>
								<img src={slide.src} alt="" />
							</SplideSlide>
						{/each}
					</Splide>
				</Flex>
			</Grid.Item>

			{#if isDesktop}
				<Grid.Item span="5 / 13">
					<div class="image-grid">
						{#each slides as slide, i}
							{@const slideIndex = i + 1}
							{@const zeroBasedIndex = slideIndex > 9 ? slideIndex : `0${slideIndex}`}
							<button
								on:click={() => main.splide.go(i)}
								class:active={index === i}
								aria-label="Go to slide {i + 1}"
								aria-current={index === i}
								aria-controls="{splideId}_slide{zeroBasedIndex}"
							>
								<img src={slide.src} alt="" />
							</button>
						{/each}
					</div>
				</Grid.Item>
			{:else}
				<Grid.Item span="4">
					<div class="thumbnail-slider">
						<Splide options={thumbsOptions} bind:this={thumbs}>
							{#each slides as slide}
								<SplideSlide>
									<img src={slide.src} alt="" />
								</SplideSlide>
							{/each}
						</Splide>
					</div>
				</Grid.Item>
			{/if}
		</Grid>
	</Container>
</Section>

<style lang="scss">
	:global(.splide__slide img) {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 1;
		border-radius: 40px;
		border-bottom-right-radius: 0;
	}

	.thumbnail-slider {
		:global(.splide__slide) {
			border: none;
		}

		:global(.splide__slide.is-active) {
			border: 4px solid var(--sa-colour-ember);
		}
	}

	.image-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;

		button {
			display: inline-flex;
			border: none;
			padding: 0;
			margin: 0;
			cursor: pointer;

			&.active {
				border: 4px solid var(--sa-colour-ember);
			}
		}

		img {
			width: 100%;
			aspect-ratio: 1;
		}
	}
</style>
