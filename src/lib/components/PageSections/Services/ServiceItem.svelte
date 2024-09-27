<script lang="ts">
	import type { ServiceItem } from '$lib/data/types';
	import CheckBadge from '$lib/components/Icons/CheckBadge.svelte';

	export let title: ServiceItem['title'];
	export let description: ServiceItem['description'];
</script>

<div class="service-item">
	<CheckBadge />
	<h3 class="h3">{title}</h3>
	<p>{description}</p>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: var(--sa-spacing-md);

		& .h3 {
			line-height: var(--sa-line-height-body);
		}
	}

	div :global(svg) {
		width: 40px;
		height: 40px;
	}
</style>
