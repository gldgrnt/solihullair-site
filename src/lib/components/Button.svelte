<script lang="ts">
	type ElementType = 'a' | 'button' | 'span';
	type Variant = 'primary' | 'secondary' | 'contact';

	export let as: ElementType = 'button';
	export let href: string;
	export let type: Variant = 'primary';

	const sharedProps = {
		class: `button ${type}`
	};
</script>

{#if as == 'button'}
	<button type="button" {...sharedProps}><slot /></button>
{:else if as == 'span'}
	<span {...sharedProps}><slot /></span>
{:else}
	<a {href} {...sharedProps}><slot /></a>
{/if}

<style lang="scss">
	.button {
		display: inline-block;
		font-family: Archivo;
		font-weight: 800;
		text-transform: uppercase;
		padding: var(--sa-spacing-sm) var(--sa-spacing-md);
		cursor: pointer;
		border-radius: 6px;
		border: 2px solid;
		transition: all 0.1s var(--sa-transition-timing-function);
		text-decoration: none;

		&:hover,
		&:focus {
			text-decoration: none;
		}

		&.primary {
			color: var(--sa-colour-snow);
			background-color: var(--sa-colour-ember);

			&:hover,
			&:focus {
				color: var(--sa-colour-ember);
				background-color: var(--sa-colour-snow);
			}
		}
	}
</style>
