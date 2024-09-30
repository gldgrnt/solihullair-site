<script lang="ts">
	export let type: 'bold' | 'thin';
</script>

<p class:bold={type === 'bold'} class:thin={type === 'thin'}><slot /></p>

<style lang="scss">
	.thin {
		font-family: var(--sa-font-family-body);
		line-height: var(--sa-line-height-body);
		font-size: var(--sa-font-size-subheading);
		font-weight: 200;
	}

	.bold {
		font-size: 22px;
		font-weight: 600;
	}
</style>
