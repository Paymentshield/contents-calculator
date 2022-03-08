import { writable } from 'svelte/store';

const LivingRoomStore = writable([
	{
		id: 1,
		label: 'Sofas',
		prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
    selectedPrice: 0
	},
	{
		id: 2,
		label: 'Other furniture',
		prices: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000],
    selectedPrice: 0
	},
	{
		id: 3,
		label: 'TV and other electricals',
		prices: [0, 400, 800, 1200, 1600, 2000, 2400, 2800, 3200, 3600, 4000, 4400, 4800],
    selectedPrice: 0
	},
	{
    id: 4,
    label: 'DVDs, video games and books',
    prices: [0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500],
    selectedPrice: 0
  },
  {
    id: 5,
    label: 'Carpets, curtains and soft furnishings',
    prices: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000],
    selectedPrice: 0
  },
  {
    id: 6,
    label: 'Pictures and ornaments',
    prices: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
    selectedPrice: 0
  }
]);

export default LivingRoomStore;
