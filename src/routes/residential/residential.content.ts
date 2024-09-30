import type { ServiceItem, ServicePhoto } from '$lib/data/types';

export const meta = {
	title: 'Residential air conditioning services',
	description:
		'Expert residential air conditioning services including installation, repair, and maintenance. Keep your home cool and comfortable with energy-efficient solutions tailored to your needs.'
};

export const pageTitle = {
	title: 'Residential',
	description:
		'Air conditioning is an efficient and cost-effective way to both cool and heat your home.'
};

export const servicesTitle = 'For residential homes, we offer the following services:';

export const services: ServiceItem[] = [
	{
		title: 'System selection',
		description:
			'We can help you choose the right AC system based on your needs, budget, and home size.',
		icon: 'system-selection'
	},
	{
		title: 'Ductwork services',
		description: 'We can install or modify ductwork to optimise airflow and system performance.',
		icon: 'ductwork'
	},
	{
		title: 'Professional installation',
		description:
			'We can install central air conditioning, wall-mounted and low-level units, as well as ducted systems.',
		icon: 'professional-installation'
	},

	{
		title: 'Emergency repairs',
		description:
			'After installation, we can help with system operation, maintenance, warranty information and service plans.',
		icon: 'emergency-repairs'
	}
];

export const photos: ServicePhoto[] = [
	{
		filename: 'residential-1',
		alt: ''
	},
	{
		filename: 'residential-2',
		alt: ''
	},
	{
		filename: 'residential-3',
		alt: ''
	},
	{
		filename: 'residential-4',
		alt: ''
	},
	{
		filename: 'residential-5',
		alt: ''
	},
	{
		filename: 'residential-6',
		alt: ''
	},
	{
		filename: 'residential-7',
		alt: ''
	},
	{
		filename: 'residential-8',
		alt: ''
	}
];
