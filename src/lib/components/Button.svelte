<script lang="ts">
	type ElementType = 'a' | 'button' | 'span';
	type Colour = 'cobalt' | 'ember' | 'whatsapp';
	type Animation = 'fade' | 'switch';

	export let as: ElementType = 'button';
	export let href: string | undefined = undefined;
	export let colour: Colour = 'cobalt';
	export let inverse: boolean = false;
	export let animation: Animation = 'switch';

	const elementProps = (() => {
		if (as === 'a') {
			return {
				href
			};
		}

		if (as === 'button') {
			return {
				type: 'button'
			};
		}

		return {};
	})();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={as}
	{...elementProps}
	on:click
	{...$$props}
	class:inverse
	class="button {animation}"
	style="--main-colour: var(--sa-colour-{colour})"
>
	<slot name="icon" />
	<slot />
</svelte:element>

<style lang="scss">
	.button {
		display: inline-flex;
		align-items: center;
		gap: var(--sa-spacing-xs);
		font-weight: 800;
		text-transform: uppercase;
		font-size: var(--sa-font-size-small);
		padding: var(--sa-spacing-sm) var(--sa-spacing-md);
		cursor: pointer;
		border-radius: 6px;
		border: 2px solid;
		transition: all 0.1s var(--sa-transition-timing-function);
		text-decoration: none;
		line-height: 1;
		/* Color */
		color: var(--sa-colour-snow);
		background-color: var(--main-colour);
		border-color: var(--main-colour);

		&:hover,
		&:focus {
			text-decoration: none;
		}

		&.switch {
			&:hover,
			&:focus {
				color: var(--main-colour);
				background-color: var(--sa-colour-snow);
			}
		}

		&.fade {
			&:hover,
			&:focus {
				filter: brightness(115%);
			}
		}

		&.inverse {
			color: var(--main-colour);
			background-color: var(--sa-colour-snow);
			border-color: var(--sa-colour-snow);

			&:hover,
			&:focus {
				color: var(--sa-colour-snow);
				background-color: var(--main-colour);
			}
		}

		:global(svg) {
			height: var(--sa-spacing-md);
			width: var(--sa-spacing-md);
		}

		:global(path) {
			fill: currentColor;
		}
	}
</style>
