<script lang="ts">
	export let title: string;
	export let description: string;

	let titleContent = 'SolihullAir';
	if (title) titleContent += ` | ${title}`;
</script>

<svelte:head>
	<title>{titleContent}</title>
	<meta name="description" content={description} />
</svelte:head>
