<script lang="ts">
	import { getBreakpointContext } from '$lib/context/context';

	export let span = '1';

	let onTablet = getBreakpointContext('tablet');
</script>

<div class="grid-item" style="grid-column: span {span}; "><slot /></div>
