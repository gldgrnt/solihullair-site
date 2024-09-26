<script lang="ts">
	import Flex from './Flex.svelte';
	import Link from './Link.svelte';

	export let href = '';
	export let src = '';
</script>

<a {href}>
	<article>
		<Flex direction="column" gap="var(--sa-spacing-md)" justify="space-between">
			<div class="image-container" style="background-image: url('{src}');"></div>
			<slot name="title" />
			<slot name="description" />
			<Link {href}>Read more</Link>
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
	}
</style>
