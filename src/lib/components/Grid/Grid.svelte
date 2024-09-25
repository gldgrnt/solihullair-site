<script lang="ts">
	import { getContext } from 'svelte';
	let breakpoint = getContext('breakpoint');
	let template = breakpoint === 'desktop' ? 'repeat(12, 1fr)' : 'repeat(4, 1fr)';
</script>

<div class="grid" style={`grid-template-columns: ${template};`}><slot /></div>

<style lang="scss">
	.grid {
		display: grid;
		gap: var(--sa-spacing-md);
		justify-content: var(--justify, 'flex-start');
	}
</style>
