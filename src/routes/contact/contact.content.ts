import type { ComponentType } from 'svelte';
import { email, phone, social } from '$lib/data/meta';
import Facebook from '$lib/components/Icons/Facebook.svelte';

type ContactDetails = {
	title: string;
	text: string;
};

type SocialLink = {
	Icon: ComponentType;
	link: {
		href: string;
		text: string;
		'aria-label': string;
	};
};

export const meta = {
	title: 'Contact us',
	description:
		'Get in touch with our air conditioning experts today for all your residential or commercial HVAC needs.'
};

export const pageTitle = 'Get in touch';

export const pageIntro = {
	title: 'Contact details'
};

export const contactDetails: ContactDetails[] = [
	{
		title: 'Phone',
		text: phone.text
	},
	{
		title: 'Email',
		text: email.text
	}
];

export const socialLinksTitle = 'Social media';
export const socialLinks: SocialLink[] = [
	{
		Icon: Facebook,
		link: {
			href: social.facebook,
			text: '/solihullair',
			'aria-label': 'Visit the SolihullAir facebook page'
		}
	}
];
