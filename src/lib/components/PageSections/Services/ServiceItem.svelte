<script lang="ts">
	import type { ServiceItem } from '$lib/data/types';

	export let title: ServiceItem['title'];
	export let description: ServiceItem['description'];
	export let icon: ServiceItem['icon'];
</script>

<div class="service-item">
	<img src="/services/icons/{icon}.svg" alt="" />
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

	img {
		width: 40px;
		height: 40px;
	}
</style>
