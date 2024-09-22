<script lang="ts">
	import { page, navigating } from '$app/stores';

	export let href: string;

	let isActive: boolean;
	$: if ($navigating) isActive = $page.route.id?.includes(href) || false;
</script>

<a class="header-link" class:header-link--active={isActive} {href}><slot /></a>

<style lang="scss">
	.header-link {
		--colour: var(--sa-colour-carbon);
		--indicator-size: 5px;

		display: inline-block;
		position: relative;
		font-family: Archivo;
		font-weight: 800;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--colour);
		transition: color var(--sa-transition-duration) var(--sa-transition-timing-function);
		padding-block: var(--sa-spacing-xs);

		&::after {
			content: '';
			pointer-events: none;
			display: inline-block;
			height: var(--indicator-size);
			width: var(--indicator-size);
			background-color: var(--colour);
			position: absolute;
			top: calc(100% - var(--indicator-size));
			left: calc(50% - (var(--indicator-size) / 2));
			border-radius: 50%;
			opacity: 0;
		}

		&:hover,
		&:focus {
			--colour: var(--sa-colour-ember);

			&::after {
				opacity: 1;
			}
		}

		&--active {
			--colour: var(--sa-colour-ember);

			&::after {
				opacity: 1;
			}
		}
	}
</style>
