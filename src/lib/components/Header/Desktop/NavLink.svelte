<script>
	export let href = '';
	export let active = false;
</script>

<a class="nav-link" class:active {href}><slot /></a>

<style lang="scss">
	.nav-link {
		--colour: var(--sa-colour-carbon);
		--indicator-size: 5px;

		display: inline-block;
		position: relative;
		font-family: var(--sa-font-family-body);
		font-size: var(--sa-font-size-small);
		font-weight: 700;
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
			--colour: var(--sa-colour-cobalt);

			&::after {
				opacity: 1;
			}
		}
		&.active {
			--colour: var(--sa-colour-cobalt);

			&::after {
				opacity: 1;
			}
		}
	}
</style>
