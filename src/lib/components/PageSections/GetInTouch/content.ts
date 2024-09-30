import type { ComponentProps, ComponentType } from 'svelte';
import type { SectionBackground } from '$lib/data/types';
import Button from '$lib/components/Button.svelte';
import Phone from '$lib/components/Icons/Phone.svelte';
import { email, phone } from '$lib/data/meta';
import Mail from '$lib/components/Icons/Mail.svelte';

type ContactCard = {
	background: SectionBackground;
	title: string;
	description: string;
	button: ComponentProps<Button> & { Icon?: ComponentType; text: string };
};

export const contactCards: ContactCard[] = [
	{
		background: 'cobalt',
		title: 'Get in touch',
		description: 'Give us a call if you need help with installation, maintenance, or repair.',
		button: {
			colour: 'cobalt',
			href: phone.link,
			text: 'Call us',
			Icon: Phone
		}
	},
	{
		background: 'ember',
		title: 'Get a quote',
		description: "Send us an email enquiry and we'll get back to you with a full quote.",
		button: {
			colour: 'ember',
			href: email.link,
			text: 'Email us',
			Icon: Mail
		}
	}
];
