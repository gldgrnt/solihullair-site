<script lang="ts">
	import Flex from '$lib/components/Flex.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import AboutUs from '$lib/components/PageSections/AboutUs/AboutUs.svelte';
	import GetInTouch from '$lib/components/PageSections/GetInTouch.svelte';
	import PageIntro from '$lib/components/PageSections/PageIntro.svelte';
	import PageTitle from '$lib/components/PageSections/PageTitle.svelte';
	import WhatWeDo from '$lib/components/PageSections/WhatWeDo.svelte';
	import WhyChooseUs from '$lib/components/PageSections/WhyChooseUs.svelte';
</script>

<PageMeta
	title="About us"
	description="Learn more about SolihullAir, dedicated to providing reliable and efficient cooling solutions."
/>

<PageTitle title="About" />

<PageIntro src="/commercial.jpg">
	<Flex gap="20px" direction="column">
		<p style="font-size: 22px; font-weight: 600;">
			Here at SolihullAir we cover all aspects of Air Conditioning and Refrigeration services
			including installation, maintenance, and repair services for all HVAC systems.
		</p>
		<p>
			We ensure optimal efficiency through regular tune-ups, emergency repairs, and system upgrades.
		</p>
		<p>
			With over 30 years experience, our skilled, qualified technicians work with various brands,
			delivering expert solutions tailored to your needs and enhancing indoor air quality and energy
			efficiency.
		</p>
	</Flex>
</PageIntro>

<AboutUs showLink={false} />
<WhatWeDo />
<WhyChooseUs />
<GetInTouch />
