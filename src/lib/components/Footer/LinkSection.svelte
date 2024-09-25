<script lang="ts">
	import { getContext } from 'svelte';
	import Flex from '../Flex.svelte';
	let breakpoint = getContext('breakpoint');

	export let direction: 'row' | 'column' = 'column';
</script>

<section>
	<Flex
		direction="column"
		gap="var(--sa-spacing-sm)"
		align={breakpoint === 'desktop' ? 'flex-end' : 'flex-start'}
	>
		<slot name="title">Title</slot>
		<Flex
			{direction}
			gap="var(--sa-spacing-sm)"
			align={breakpoint === 'desktop' ? 'flex-end' : 'flex-start'}
		>
			<slot />
		</Flex>
	</Flex>
</section>

<style lang="scss">
	section {
		:global(h3) {
			margin: 0;
		}

		:global(a) {
			font-size: var(--sa-font-size-small);
		}
	}
</style>
