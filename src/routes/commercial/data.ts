import type { ServiceItem, ServicePhoto } from '$lib/data/types';

export const services: ServiceItem[] = [
	{
		title: 'HVAC Installation',
		description:
			'Professional installation of commercial heating, ventilation, and air conditioning systems tailored to business needs.',
		icon: 'hvac-installation'
	},
	{
		title: 'Refrigeration Solutions',
		description:
			'Installation and maintenance of commercial refrigeration units, including walk-in coldrooms, freezers, and Cellar Cooling.',
		icon: 'refrigeration-solutions'
	},
	{
		title: 'Regular Maintenance',
		description:
			'Scheduled maintenance programs to ensure optimal performance and extend the lifespan of HVAC and refrigeration systems.',
		icon: 'regular-maintainance'
	},
	{
		title: 'Emergency Repairs',
		description:
			'24/7 emergency repair services to minimize downtime and ensure business operations continue smoothly.',
		icon: 'emergency-repairs'
	},
	{
		title: 'Energy Efficiency Solutions',
		description:
			'Upgrades and retrofits to improve energy efficiency, reduce costs, and meet environmental standards.',
		icon: 'energy-efficient'
	},
	{
		title: 'Custom Ductwork Design',
		description:
			'Design and installation of customized ductwork to enhance airflow and system efficiency in commercial spaces.',
		icon: 'ductwork'
	}
];

export const photos: ServicePhoto[] = [
	{
		filename: 'commercial-1',
		alt: ''
	},
	{
		filename: 'commercial-2',
		alt: ''
	},
	{
		filename: 'commercial-3',
		alt: ''
	},
	{
		filename: 'commercial-4',
		alt: ''
	},
	{
		filename: 'commercial-5',
		alt: ''
	}
];
