<script>
	import Header from './Header/Header.svelte';
	import Footer from './Footer/Footer.svelte';
	import GetInTouch from './PageSections/GetInTouch/GetInTouch.svelte';
</script>

<div class="layout">
	<Header />
	<main><slot /></main>
	<GetInTouch />
	<Footer />
</div>
