<script lang="ts">
	import GetInTouch from '$lib/components/PageSections/GetInTouch.svelte';
	import PageIntro from '$lib/components/PageSections/PageIntro.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
</script>

<PageTitle
	title="Commercial"
	description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet lectus velit. "
/>

<PageIntro src="/commercial.jpg">
	<p>
		We're based in Solihull but we cover the Midlands, Worcestershire, Shropshire. Morbi id mauris
		sit amet odio dapibus sodales. Nulla ac sagittis elit. Proin tempor, purus eget tincidunt
		aliquet, enim nisl pharetra arcu, sed porttitor ligula tortor at ligula. Aenean rhoncus
		consequat egestas. More about us
	</p>
</PageIntro>

<GetInTouch />
