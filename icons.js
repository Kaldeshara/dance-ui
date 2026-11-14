// dance-ui icons: SVG path data on a 24×24 grid, drawn with stroke="currentColor",
// stroke-width 2, round caps and joins, fill "none" (the crown is filled). One family for
// both apps, so React and Svelte components render the same shapes:
//
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
//        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
//     {#each icons.back as d}<path {d} />{/each}
//   </svg>

/** @type {Record<string, string[]>} */
export const icons = {
	back: ['M19 12H5M11 6l-6 6 6 6'],
	forward: ['M5 12h14M13 6l6 6-6 6'],
	chevronRight: ['M9 6l6 6-6 6'],
	add: ['M12 5v14M5 12h14'],
	close: ['M6 6l12 12M18 6 6 18'],
	menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
	filter: ['M3 5h18l-7 8.5V19l-4 2v-7.5Z'],
	sidebar: ['M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z', 'M9 4v16M16 10l-2 2 2 2'],
	system: ['M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'M8 20h8M12 16v4'],
	sun: [
		'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
		'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'
	],
	moon: ['M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z'],
	account: ['M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z', 'M4 21a8 8 0 0 1 16 0'],
	logout: ['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'm16 17 5-5-5-5M21 12H9'],
	calendar: ['M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'M16 2v4M8 2v4M3 10h18']
};

/** Filled crown (owner badge): render with fill="currentColor" and no stroke. */
export const crown = [
	'M3 8.5l4.2 3.3L12 5l4.8 6.8L21 8.5l-1.8 9.5H4.8L3 8.5Z',
	'M6 19h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z'
];
