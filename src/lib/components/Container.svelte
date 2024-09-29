<script lang="ts">
	import { getBreakpointContext } from '$lib/context/context';

	export let paddingBlock = '60px';
	export let paddingInline = '80px';

	let onTablet = getBreakpointContext('tablet');

	const mobilePaddingBlock = '40px';
	const mobilePaddingInline = 'var(--sa-spacing-md)';
</script>

<div
	style:padding-block={$onTablet ? mobilePaddingBlock : paddingBlock}
	style:padding-inline={$onTablet ? mobilePaddingInline : paddingInline}
>
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss">
	.container {
		max-width: 1100px;
		margin: auto;
	}
</style>
