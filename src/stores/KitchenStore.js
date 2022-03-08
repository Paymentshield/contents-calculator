import { writable } from 'svelte/store';

const KitchenStore = writable([
	{
		id: 1,
		label: 'Fridge freezer',
		prices: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000],
    selectedPrice: 0
	},
	{
		id: 2,
		label: 'Oven and cooker',
		prices: [0, 150, 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500, 1650, 1800, 1950, 2100, 2250, 2400, 2550, 2700, 2850, 3000],
    selectedPrice: 0
	},
	{
		id: 3,
		label: 'Microwave, toaster and other electricals',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
    selectedPrice: 0
	},
	{
    id: 4,
    label: 'Pots, pans and utensils',
    prices: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    selectedPrice: 0
  },
  {
    id: 5,
    label: 'Crockery, cutlery and glassware',
    prices: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 660, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500],
    selectedPrice: 0
  },
  {
    id: 6,
    label: 'Washing machine and tuble dryer',
    prices: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000],
    selectedPrice: 0
  }
]);

export default KitchenStore;
