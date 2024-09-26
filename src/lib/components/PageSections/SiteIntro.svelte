<script lang="ts">
	import Button from '../Button.svelte';
	import Container from '../Container.svelte';
	import Flex from '../Flex.svelte';
	import Logotype from '../Icons/Logotype.svelte';
	import Section from '../Section.svelte';

	const paddingBlock = '80px';

	let video: HTMLVideoElement;
</script>

<div class="site-intro">
	<video
		autoplay
		muted
		loop
		bind:this={video}
		disablepictureinpicture
		disableremoteplayback
		playsinline
	>
		<source src="/aircon.webm" type="video/webm" />
		<source src="/aircon.mp4" type="video/mp4" />
	</video>
	<Section background="transparent">
		<Container {paddingBlock}>
			<Container {paddingBlock}>
				<Flex direction="column" align="center" gap="var(--sa-spacing-lg)">
					<Logotype />
					<h1 class="h1">
						<span>SolihullAir.</span>
						Your local air conditioning and refrigeration specialist.
					</h1>
					<Button as="a" href="/contact" animation="fade">Get in touch</Button>
				</Flex>
			</Container>
		</Container>
	</Section>
</div>

<style lang="scss">
	.site-intro {
		position: relative;
		overflow: hidden;

		video {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100%;
			min-width: 1200px;
			transform: translate(-50%, -50%);
			z-index: -2;
			pointer-events: none;
		}

		&::after {
			content: '';
			background-color: var(--sa-colour-platinum);
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			opacity: 0.7;
		}

		:global(svg) {
			width: 100%;
			height: auto;
			max-width: 670px;
		}
	}

	h1 {
		& span {
			display: none;
		}

		font-family: var(--sa-font-family-body);
		font-weight: 300;
		font-size: 28px;
		line-height: var(--sa-line-height-body);
		color: var(--sa-colour-cobalt);
		text-align: center;

		@media screen and (max-width: 767px) {
			font-size: 22px;
			font-weight: 400;
		}
	}
</style>
