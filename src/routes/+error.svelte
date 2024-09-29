<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Flex from '$lib/components/Flex.svelte';
	import GetInTouch from '$lib/components/PageSections/GetInTouch.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
</script>

<PageTitle title="Page not found" />

<Container>
	<Flex direction="column" gap="var(--sa-spacing-lg)">
		<h2 class="h3">That page doesn't exist!</h2>
		Check that you typed the address correctly or click the link below to the homepage.
		<Button as="a" href="/" animation="fade">Homepage</Button>
	</Flex>
</Container>

<GetInTouch />

<style lang="scss">
</style>
