<script lang="ts">
	export let direction: 'vertical' | 'horizontal' = 'vertical';
</script>

<section>
	<slot name="title">Title</slot>
	<div class={`${direction}`}>
		<slot />
	</div>
</section>

<style lang="scss">
	section {
		display: inline-flex;
		flex-direction: column;
		gap: var(--sa-spacing-md);
		align-items: flex-end;

		:global(h3) {
			margin: 0;
		}
	}

	div {
		display: flex;
		gap: var(--sa-spacing-md);
		align-items: flex-end;

		&.horizontal {
			flex-direction: row;
		}

		&.vertical {
			flex-direction: column;
		}
	}
</style>
