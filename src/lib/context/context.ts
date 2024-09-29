import { writable, type Writable } from 'svelte/store';
import { getContext } from 'svelte';

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'monitor';

export const mobileStore = writable(false);
export const tabletStore = writable(false);
export const desktopStore = writable(false);
export const monitorStore = writable(false);

export function setBreakpointContext(width: number) {
	mobileStore.set(width < 576);
	tabletStore.set(width < 800);
	desktopStore.set(width < 1079);
	monitorStore.set(width > 1080);
}

export function getBreakpointContext(breaktpoint: Breakpoint) {
	return getContext<Writable<boolean>>(breaktpoint);
}
