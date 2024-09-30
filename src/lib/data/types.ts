export type ServiceItem = {
	title: string;
	description: string;
	icon: string;
};

export type ServicePhoto = {
	filename: string;
	alt: string;
};

export type ServiceCard = {
	title: string;
	description: string;
	filename: string;
	link: {
		href: string;
		'aria-label': string;
	};
};

export type SectionBackground = 'ember' | 'snow' | 'platinum' | 'cobalt' | 'transparent';
