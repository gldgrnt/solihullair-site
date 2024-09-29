import type { ComponentProps, ComponentType } from 'svelte';
import Button from '$lib/components/Button.svelte';
import Phone from '$lib/components/Icons/Phone.svelte';

type SiteIntroAction = {
	text: string;
	href: ComponentProps<Button>['href'];
	colour: ComponentProps<Button>['colour'];
	Icon?: ComponentType;
};

export const title = 'Your local air conditioning and refrigeration specialist';

export const actions: SiteIntroAction[] = [
	{
		text: 'Call us',
		href: '/contact',
		colour: 'cobalt',
		Icon: Phone
	},
	{
		text: 'Get in touch',
		href: '/contact',
		colour: 'ember'
	}
];
