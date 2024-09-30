<script lang="ts">
	import Flex from './Flex.svelte';
	import Link from './Link.svelte';

	export let link: { href: string; 'aria-label': string };
	export let filename: string;
	export let title;
	export let description;
</script>

<a href={link.href} aria-label={link['aria-label']}>
	<article>
		<div
			class="image-container"
			style="background-image: url('/services/photos/{filename}.jpg');"
		></div>
		<Flex direction="column" gap="var(--sa-spacing-md)" justify="space-between">
			<h3 class="h3">{title}</h3>
			<p>{description}</p>
			<Link as="span">{title} services</Link>
		</Flex>
	</article>
</a>

<style lang="scss">
	a {
		&:hover,
		&:focus {
			text-decoration: none;

			.image-container {
				opacity: 0.5;
			}
		}
	}

	article {
		max-width: 475px;
	}

	.image-container {
		width: 100%;
		aspect-ratio: 1.6;
		background-size: cover;
		background-position: center;
		border-radius: var(--sa-spacing-sm);
		transition: all var(--sa-transition-duration) var(--sa-transition-timing-function);
		margin-bottom: var(--sa-spacing-lg);
	}
</style>
