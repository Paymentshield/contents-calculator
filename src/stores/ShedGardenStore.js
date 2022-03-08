import { writable } from 'svelte/store';

const ShedGardenStore = writable([
	{
		id: 1,
		label: 'Outdoors gear',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
		selectedPrice: 0
	},
	{
		id: 2,
		label: 'Gardening equipment',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
		selectedPrice: 0
	},
	{
		id: 3,
		label: 'Tools',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
		selectedPrice: 0
	},
	{
		id: 4,
		label: 'Lawnmowers',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
		selectedPrice: 0
	},
	{
		id: 5,
		label: 'Garden furniture',
		prices: [
			0, 250, 500, 750, 100, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000,
			4250, 4500, 4750, 5000
		],
		selectedPrice: 0
	},
	{
		id: 6,
		label: 'Play equipment',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
		selectedPrice: 0
	}
]);

export default ShedGardenStore;
