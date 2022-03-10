<script>
	import { mapReduce } from '../services/mapReduce';

	import LivingRoomStore from '../stores/LivingRoomStore';
	import KitchenStore from '../stores/KitchenStore';
	import DiningRoomStore from '../stores/DiningRoomStore';
	import BedroomsStore from '../stores/BedroomsStore';
	import BathroomGarageStore from '../stores/BathroomGarageStore';
	import ShedGardenStore from '../stores/ShedGardenStore';

	const livingRoomTotal = mapReduce(LivingRoomStore, (item) => item.selectedPrice);
	const kitchenTotal = mapReduce(KitchenStore, (item) => item.selectedPrice);
	const diningRoomTotal = mapReduce(DiningRoomStore, (item) => item.selectedPrice);
	const bedroomsTotal = mapReduce(BedroomsStore, (room) => room.selectedPrice);
	const bathroomTotal = mapReduce(BathroomGarageStore, (item) => item.selectedPrice);
	const shedGardenTotal = mapReduce(ShedGardenStore, (item) => item.selectedPrice);

	const total =
		$livingRoomTotal +
		$kitchenTotal +
		$diningRoomTotal +
		$bedroomsTotal +
		$bathroomTotal +
		$shedGardenTotal;

    function recalculate () {
      window.location.href = "/";
    }
</script>

<div class="p-3">
	<h1 class="text-2xl font-bold mb-2">Results</h1>
	<p>You've calculated the cost of your belongings as:</p>
	<h3 class="text-3xl font-bold mt-1 mb-2">£{total.toLocaleString()}</h3>
	<p>
		Now that you know how much your possessions are worth, you can compare contents insurance quotes
		with us, and get covered!
	</p>

	<h3 class="text-2xl mt-5">Room breakdown</h3>

	<table class="min-w-full divide-y divide-gray-200 mt-3">
		<thead class="bg-gray-50">
			<tr>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>Room</th
				>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>Total</th
				>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			<tr>
				<td class="px-6 py-4 whitespace-nowrap"> Living Room </td>
				<td class="px-6 py-4 whitespace-nowrap">
					£{$livingRoomTotal.toLocaleString()}
				</td>
			</tr>
			<tr>
				<td class="px-6 py-4 whitespace-nowrap"> Kitchen </td>
				<td class="px-6 py-4 whitespace-nowrap">
					£{$kitchenTotal.toLocaleString()}
				</td>
			</tr>
			<tr>
				<td class="px-6 py-4 whitespace-nowrap"> Dining Room </td>
				<td class="px-6 py-4 whitespace-nowrap">
					£{$diningRoomTotal.toLocaleString()}
				</td>
			</tr>
			<tr>
				<td class="px-6 py-4 whitespace-nowrap"> Bedrooms </td>
				<td class="px-6 py-4 whitespace-nowrap">
					£{$bedroomsTotal.toLocaleString()}
				</td>
			</tr>
			<tr>
				<td class="px-6 py-4 whitespace-nowrap"> Bathroom, Garage and Other </td>
				<td class="px-6 py-4 whitespace-nowrap">
					£{$bathroomTotal.toLocaleString()}
				</td>
			</tr>
			<tr>
				<td class="px-6 py-4 whitespace-nowrap"> Shed and Garden </td>
				<td class="px-6 py-4 whitespace-nowrap">
					£{$shedGardenTotal.toLocaleString()}
				</td>
			</tr>
		</tbody>
	</table>

	<button
		class="bg-[#2C3536] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-5"
		on:click={() => recalculate()}
	>
		Recalculate
	</button>
</div>

<style>
	table {
		font-family: futura-pt, sans-serif;
		font-weight: 400;
		font-style: normal;
		border-collapse: collapse;
		width: 100%;
		border-radius: 5px;
		overflow: hidden;
	}
</style>
