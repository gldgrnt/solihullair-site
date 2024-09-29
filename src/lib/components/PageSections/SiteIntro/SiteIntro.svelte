<script lang="ts">
	import Button from '../../Button.svelte';
	import Container from '../../Container.svelte';
	import Flex from '../../Flex.svelte';
	import Section from '../../Section.svelte';

	import { title, actions } from './content';
</script>

<div class="site-intro">
	<video autoplay muted loop disablepictureinpicture disableremoteplayback playsinline>
		<source src="/aircon.webm" type="video/webm" />
		<source src="/aircon.mp4" type="video/mp4" />
	</video>

	<Section background="transparent">
		<Container>
			<Flex class="content-container" justify="center" align="center" direction="column">
				<Flex direction="column" align="center" gap="var(--sa-spacing-lg)">
					<Flex direction="column" gap="var(--sa-spacing-md)">
						<img alt="SolihullAir" src="/logotype.svg" />
						<h1 class="h1">{title}</h1>
					</Flex>
					<Flex gap="var(--sa-spacing-md)">
						{#each actions as { text, href, colour, Icon }}
							<Button as="a" {href} animation="fade" {colour}>
								{#if Icon}
									<Icon slot="icon" />
								{/if}
								{text}
							</Button>
						{/each}
					</Flex>
				</Flex>
			</Flex>
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
			background-color: var(--sa-colour-platinum);
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

		:global(.content-container) {
			min-height: 500px;

			@media screen and (max-width: 767px) {
				min-height: 400px;
			}
		}
	}

	img {
		width: 100%;
		max-width: 670px;
	}

	h1 {
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
