<script lang="ts">
	export let as: 'a' | 'span' = 'a';
</script>

<svelte:element this={as} class="link" {...$$props}><slot /></svelte:element>

<style lang="scss">
	.link {
		font-weight: 700;
		text-decoration: underline;
	}
</style>
