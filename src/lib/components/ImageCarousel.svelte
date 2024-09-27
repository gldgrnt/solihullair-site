<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Container from './Container.svelte';
	import Section from './Section.svelte';

	const mainOptions: Options = {
		rewind: true
	};

	const secondaryOptions: Options = {
		isNavigation: false,
		perPage: 2
	};
</script>

<Splide aria-label="My Favorite Images" {mainOptions}>
	<SplideSlide>
		<img src="/residential.png" height="400" alt="Imasge 1" />
	</SplideSlide>
	<SplideSlide>
		<img src="/commercial.jpg" height="400" alt="Imagfe 2" />
	</SplideSlide>
</Splide>

<Splide aria-label="My Favorite Images" {secondaryOptions}>
	<SplideSlide>
		<img src="/residential.png" height="400" alt="Imasge 1" />
	</SplideSlide>
	<SplideSlide>
		<img src="/commercial.jpg" height="400" alt="Imagfe 2" />
	</SplideSlide>
</Splide>

<style lang="scss">
</style>
