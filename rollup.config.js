import svelte from 'rollup-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

export default (theme) => ({
	plugins: [
		svelte({
			preprocess: sveltePreprocess()
		})
	]
});
