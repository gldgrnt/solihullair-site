<script lang="ts">
	export let justify = 'flex-start';
	export let align = 'flex-start';
	export let direction = 'row';
	export let gap = '0px';
</script>

<div
	style={`flex-direction: ${direction}; justify-content: ${justify}; align-items: ${align}; gap: ${gap};`}
>
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
	}
</style>
