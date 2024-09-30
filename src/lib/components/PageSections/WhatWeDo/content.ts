import { routes } from '$lib/data/routes';
import type { ServiceCard } from '$lib/data/types';

export const serviceCards: ServiceCard[] = [
	{
		title: 'Residential',
		description:
			'Enjoy year-round comfort with our efficient, energy-saving air conditioning systems.',
		filename: 'residential-0',
		link: {
			href: routes.residential,
			'aria-label': 'Read more about our residential air conditioning services'
		}
	},
	{
		title: 'Commercial',
		description: 'Keep business running smoothly with air conditioning tailored to your needs.',
		filename: 'commercial-0',
		link: {
			href: routes.residential,
			'aria-label': 'Read more about our commercial air conditioning services'
		}
	}
];
