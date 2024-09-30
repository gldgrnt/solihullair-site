import type { ServiceItem, ServicePhoto } from '$lib/data/types';

export const services: ServiceItem[] = [
	{
		title: 'System Selection',
		description:
			'Help homeowners choose the right AC system based on their needs, budget, and home size.',
		icon: 'system-selection'
	},
	{
		title: 'Ductwork Services',
		description:
			'Installation or modification of ductwork to optimize airflow and system performance.',
		icon: 'ductwork'
	},
	{
		title: 'Professional Installation',
		description:
			'Expert installation of central air conditioning, wall-mounted & low-level units, as well as ducted systems, ensuring proper placement and efficiency.',
		icon: 'professional-installation'
	},

	{
		title: 'Emergency Repairs',
		description:
			'Post-Installation Support: Guidance on system operation and maintenance, including warranty information and service plans to keep your mind at ease.',
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
	}
];
