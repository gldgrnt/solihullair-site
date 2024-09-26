import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ClosePlugin from './close-plugin';

export default defineConfig({
	plugins: [sveltekit(), ClosePlugin()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or 'modern'
			}
		}
	}
});
