<script lang="ts">
	type BackgroundColour = 'ember' | 'snow' | 'platinum' | 'cobalt';
	export let background: BackgroundColour = 'snow';

	let textColour = ['ember', 'cobalt'].includes(background) ? 'snow' : 'carbon';
</script>

<section
	style="--background: var(--sa-colour-{background}); --text-color: var(--sa-colour-{textColour});"
>
	<slot />
</section>

<style lang="scss">
	section {
		width: 100%;
		background-color: var(--background);
		color: var(--text-color);
	}
</style>
