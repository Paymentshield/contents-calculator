import { writable } from 'svelte/store';

const BedroomsStore = writable([
	{
		id: 1,
		label: 'Beds',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300, 3600, 3900, 4200, 4500, 4800],
    selectedPrice: 0
	},
	{
		id: 2,
		label: 'Furniture',
		prices: [0, 250, 500, 750, 100, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4250, 4500, 4750, 5000],
    selectedPrice: 0
	},
	{
		id: 3,
		label: 'Shoes and clothes',
		prices: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
    selectedPrice: 0
	},
	{
    id: 4,
    label: 'Jewellery and watches',
    prices: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
    selectedPrice: 0
  },
  {
    id: 5,
    label: 'Bedding, carpets and curtains',
    prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
    selectedPrice: 0
  },
  {
    id: 6,
    label: 'TV and other electricals',
    prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300, 3600, 3900, 4200, 4500, 4800],
    selectedPrice: 0
  }
]);

export default BedroomsStore;
