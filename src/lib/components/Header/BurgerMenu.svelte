<script lang="ts">
	export let active = false;
</script>

<button type="button" aria-label="Open menu" class="burger-menu" class:active
	><div class="burger-menu__icon"></div>
</button>

<style lang="scss">
	.burger-menu {
		display: inline-flex;
		padding: var(--sa-spacing-sm);
	}

	.burger-menu__icons {
		background: red;
		height: 4px;
	}
</style>
