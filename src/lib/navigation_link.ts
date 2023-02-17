// Navigation Links & Sitemap
import { base } from '$app/paths';

export const menuNavLinks: any = [
	// Docs ---
	{
		id: 'settings',
		title: 'Settings',
		list: [{ href: base + '/settings', label: 'Settings', keywords: '' }]
	},
	{
		id: 'compare',
		title: 'Compare',
		list: [
			//	{ href: '/compare', label: 'Versions', keywords: '' },
			{ href: base + '/compare_datasets', label: 'Datasets', keywords: '' }
			//	{ href: '/compare', label: 'Fields', keywords: '' }
		]
	},

	// Guides ---

	{
		id: 'check',
		title: 'Check',
		list: [{ href: base + '/check_dq', label: 'Check Data Quality', keywords: '' }]
	}

	// Tailwind ---
];
