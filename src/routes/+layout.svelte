<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import '$lib/styles/index.scss';
	import BreakpointContext from '$lib/context/BreakpointContext.svelte';
</script>

<BreakpointContext>
	<Layout>
		<slot />
	</Layout>
</BreakpointContext>
