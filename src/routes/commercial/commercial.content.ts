import type { ServiceItem, ServicePhoto } from '$lib/data/types';

export const meta = {
	title: 'Commercial air conditioning services',
	description:
		'Expert commercial air conditioning services including installation, repair, and maintenance. Keep your home cool and comfortable with energy-efficient solutions tailored to your needs.'
};

export const pageTitle = {
	title: 'Commercial',
	description: 'Keep business running smoothly with energy-efficient air conditioning.'
};

export const servicesTitle = 'We offer a variety of commercial services, including:';

export const services: ServiceItem[] = [
	{
		title: 'HVAC installation',
		description:
			'We install commercial heating, ventilation, and air conditioning systems tailored to your needs.',
		icon: 'hvac-installation'
	},
	{
		title: 'Refrigeration solutions',
		description:
			'We can install and maintain commercial refrigeration units, including walk-in coldrooms, freezers, and cellar cooling.',
		icon: 'refrigeration-solutions'
	},
	{
		title: 'Regular maintenance',
		description:
			'We can help ensure optimal performance and extend the lifespan of your HVAC and refrigeration systems.',
		icon: 'regular-maintainance'
	},
	{
		title: 'Emergency repairs',
		description:
			'We offer 24/7 emergency repair services to minimise downtime and ensure you can continue to operate smoothly.',
		icon: 'emergency-repairs'
	},
	{
		title: 'Energy efficiency solutions',
		description:
			'We can install upgrades and retrofits to improve energy efficiency, reduce costs, and meet environmental standards.',
		icon: 'energy-efficient'
	},
	{
		title: 'Custom ductwork design',
		description: 'We can install or modify ductwork to optimise airflow and system performance.',
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
