export interface Navigation {
	links: NavLink[];
	currentRoute: NavLink['href'];
}

export type NavLink = {
	href: string;
	text: string;
};
