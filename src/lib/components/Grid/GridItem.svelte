<script lang="ts">
	export let span = 1;
</script>

<div class="grid-item" style="--span:{span}"><slot /></div>

<style lang="scss">
	.grid-item {
		display: block;
		grid-column: 1 / span var(--span);
	}
</style>
