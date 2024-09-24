<script lang="ts">
	export let as: 'a' | 'button' = 'button';
	export let variant: 'snow' | 'cobalt' | 'platinum' | 'ember' = 'snow';
	export let active = false;
	export let handleClick = () => {};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={as}
	class={`icon-button ${variant}`}
	{...$$restProps}
	class:active
	on:click={handleClick}
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

	.snow {
		background-color: var(--sa-colour-snow);

		& :global(path) {
			fill: var(--sa-colour-carbon);
			opacity: 0.5;
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
</style>
