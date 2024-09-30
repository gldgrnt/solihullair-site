<script lang="ts">
	import PageMeta from '$lib/components/PageMeta.svelte';
	import AboutUs from '$lib/components/PageSections/AboutUs/AboutUs.svelte';
	import SiteIntro from '$lib/components/PageSections/SiteIntro/SiteIntro.svelte';
	import WhatWeDo from '$lib/components/PageSections/WhatWeDo/WhatWeDo.svelte';
	import WhyChooseUs from '$lib/components/PageSections/WhyChooseUs/WhyChooseUs.svelte';

	import { meta } from './content';
</script>

<PageMeta title={meta.title} description={meta.description} />
<SiteIntro />
<AboutUs />
<WhatWeDo />
<WhyChooseUs />
