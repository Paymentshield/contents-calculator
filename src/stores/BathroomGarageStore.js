import { writable } from 'svelte/store';

const BathroomGarageStore = writable([
	{
		id: 1,
		label: 'Cabinets, shelving and mirros',
		prices: [
			0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
			1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500
		],
		selectedPrice: 0
	},
	{
		id: 2,
		label: 'Soft furnishings',
		prices: [
			0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 660, 700, 750, 800, 850, 900,
			950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500
		],
		selectedPrice: 0
	},
	{
		id: 3,
		label: 'Electricals',
		prices: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000],
		selectedPrice: 0
	},
	{
		id: 4,
		label: 'Exercise equipment',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
		selectedPrice: 0
	},
	{
		id: 5,
		label: 'Toys',
		prices: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000],
		selectedPrice: 0
	},
	{
		id: 6,
		label: 'Laptops and computers',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
		selectedPrice: 0
	}
]);

export default BathroomGarageStore;
