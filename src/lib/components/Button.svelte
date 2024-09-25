<script lang="ts">
	type ElementType = 'a' | 'button' | 'span';
	type Variant = 'cobalt' | 'ember' | 'whatsapp';

	export let as: ElementType = 'button';
	export let href: string | undefined = undefined;
	export let inverse: boolean = false;
	export let type: Variant = 'cobalt';

	const specificProps = (() => {
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

	const props = {
		...specificProps,
		class: `button ${type}`
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element this={as} {...props} on:click {...$$props} class:inverse>
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

		&:hover,
		&:focus {
			text-decoration: none;
		}

		&.ember {
			color: var(--sa-colour-snow);
			background-color: var(--sa-colour-ember);
			border-color: var(--sa-colour-ember);

			&:hover,
			&:focus {
				color: var(--sa-colour-ember);
				background-color: var(--sa-colour-snow);
			}

			&.inverse {
				color: var(--sa-colour-ember);
				background-color: var(--sa-colour-snow);
				border-color: var(--sa-colour-snow);

				&:hover,
				&:focus {
					color: var(--sa-colour-snow);
					background-color: var(--sa-colour-ember);
				}
			}
		}

		&.whatsapp {
			color: var(--sa-colour-snow);
			background-color: var(--sa-colour-whatsapp);
			border-color: var(--sa-colour-whatsapp);

			&:hover,
			&:focus {
				color: var(--sa-colour-whatsapp);
				background-color: var(--sa-colour-snow);
			}

			&.inverse {
				color: var(--sa-colour-whatsapp);
				background-color: var(--sa-colour-snow);
				border-color: var(--sa-colour-snow);

				&:hover,
				&:focus {
					color: var(--sa-colour-snow);
					background-color: var(--sa-colour-whatsapp);
				}
			}
		}

		&.cobalt {
			color: var(--sa-colour-snow);
			background-color: var(--sa-colour-cobalt);
			border-color: var(--sa-colour-cobalt);

			&:hover,
			&:focus {
				color: var(--sa-colour-cobalt);
				background-color: var(--sa-colour-snow);
			}

			&.inverse {
				color: var(--sa-colour-cobalt);
				background-color: var(--sa-colour-snow);
				border-color: var(--sa-colour-snow);

				&:hover,
				&:focus {
					color: var(--sa-colour-snow);
					background-color: var(--sa-colour-cobalt);
				}
			}
		}
	}

	:global(svg) {
		height: var(--sa-spacing-md);
		width: var(--sa-spacing-md);
	}

	:global(path) {
		fill: currentColor;
	}
</style>
