<script lang="ts">
	export let active = false;
	export let onClick: () => void;

	function handleClick() {
		onClick();
	}
</script>

<button
	type="button"
	aria-label="Open menu"
	class="burger-menu"
	class:active
	on:click={handleClick}
>
	{#each { length: 3 } as _}
		<span class="burger-menu__row"></span>
	{/each}
</button>

<style lang="scss">
	.burger-menu {
		display: inline-flex;
		padding: var(--sa-spacing-sm);
		flex-direction: column;
		gap: 6px;
		border: none;
		border-radius: var(--sa-spacing-xxs);
		background-color: var(--sa-colour-platinum);

		&:hover,
		&:focus {
			filter: brightness(90%);
		}

		&.active {
			filter: brightness(60%);
		}
	}

	.burger-menu__row {
		background-color: var(--sa-colour-carbon);
		opacity: 0.5;
		height: 4px;
		width: 24px;
		border-radius: 1px;
	}
</style>
