<script lang="ts">
	export let span = '1';
	export let justify = 'space-between';
</script>

<div class="grid-item" style="grid-column: span {span}; justify-content: {justify}"><slot /></div>

<style lang="scss">
	.grid-item {
		display: flex;
	}
</style>
