<script lang="ts">
	import EmphasisedText from '$lib/components/EmphasisedText.svelte';
	import Flex from '$lib/components/Flex.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import AboutUs from '$lib/components/PageSections/AboutUs/AboutUs.svelte';
	import PageIntro from '$lib/components/PageSections/PageIntro.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
	import WhatWeDo from '$lib/components/PageSections/WhatWeDo/WhatWeDo.svelte';
	import WhyChooseUs from '$lib/components/PageSections/WhyChooseUs/WhyChooseUs.svelte';

	import { introParagraphs, meta } from './about.content';
</script>

<PageMeta title={meta.title} description={meta.description} />

<PageTitle title="About" />

<PageIntro src="/about-solihullair.jpg">
	<Flex gap="20px" direction="column">
		{#each introParagraphs as paragraph, i}
			{#if i === 0}
				<EmphasisedText type="bold">{paragraph}</EmphasisedText>
			{:else}
				<p>{paragraph}</p>
			{/if}
		{/each}
	</Flex>
</PageIntro>

<AboutUs showLink={false} />
<WhatWeDo />
<WhyChooseUs />
