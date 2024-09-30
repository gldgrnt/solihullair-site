export const title = 'Why choose us';

export const description = [
	"We're a Refcom Certified company with F-Gas (REF1020074) and we hold City & Guilds qualifications.",
	'F-Gas certification guarantees that we comply with regulations on handling refrigerants. City & Guilds qualifications demonstrate our technical expertise and commitment to high-quality workmanship.'
];

type QualificationLogo = {
	filename: string;
	alt: string;
};

export const qualificationLogos: QualificationLogo[] = [
	{
		filename: 'city-guilds-qualified',
		alt: 'City Guilds Qualification'
	},
	{
		filename: 'refcom-gas',
		alt: 'Refcom F-Gas Certification'
	}
];
