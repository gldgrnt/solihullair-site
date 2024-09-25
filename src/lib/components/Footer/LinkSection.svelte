<script lang="ts">
	import Flex from '../Flex.svelte';

	export let direction: 'row' | 'column' = 'column';
</script>

<section>
	<Flex direction="column" gap="var(--sa-spacing-md)" align="flex-end">
		<slot name="title">Title</slot>
		<Flex {direction} gap="var(--sa-spacing-md)" align="flex-end">
			<slot />
		</Flex>
	</Flex>
</section>

<style lang="scss">
	section {
		:global(h3) {
			margin: 0;
		}
	}
</style>
