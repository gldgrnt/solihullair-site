<script lang="ts">
	export let as: 'a' | 'button' = 'button';
	export let variant: 'snow' | 'cobalt' | 'platinum' | 'ember' | 'carbon' = 'snow';
	export let small = false;
	export let active = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={as}
	class={`icon-button ${variant}`}
	{...$$restProps}
	class:active
	class:small
	on:click
>
	<slot />
</svelte:element>

<style lang="scss">
	.icon-button {
		display: inline-flex;
		border: none;
		margin: 0;
		padding: var(--sa-spacing-sm);
		border-radius: var(--sa-spacing-xxs);

		& :global(svg) {
			height: 24px;
			width: 24px;
		}
	}

	/* Sizes */
	.small {
		padding: var(--sa-spacing-xs);

		& :global(svg) {
			height: 16px;
			width: 16px;
		}
	}

	/* Colours */
	.snow {
		background-color: var(--sa-colour-snow);

		& :global(path) {
			fill: var(--sa-colour-carbon);
		}

		&:hover,
		&:focus,
		&.active {
			background-color: var(--sa-colour-platinum);
		}
	}

	.platinum {
		background-color: var(--sa-colour-platinum);

		& :global(path) {
			fill: var(--sa-colour-carbon);
			opacity: 0.5;
		}

		&:hover,
		&:focus {
			filter: brightness(90%);
		}

		&.active {
			filter: brightness(60%);
		}
	}

	.cobalt {
		background-color: var(--sa-colour-cobalt);

		& :global(path) {
			fill: var(--sa-colour-snow);
		}

		&:hover,
		&:focus,
		&.active {
			filter: brightness(90%);
		}
	}

	.carbon {
		background-color: var(--sa-colour-carbon);

		& :global(path) {
			fill: var(--sa-colour-snow);
		}
	}
</style>
