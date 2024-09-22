<script>
	import Header from './Header/Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="layout">
	<Header />
	<main><slot /></main>
	<Footer />
</div>
