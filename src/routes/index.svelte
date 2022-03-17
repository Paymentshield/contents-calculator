<script>
	import LivingRoom from '$lib/LivingRoom.svelte';
	import Kitchen from '$lib/Kitchen.svelte';
	import DiningRoom from '$lib/DiningRoom.svelte';
	import Bedrooms from '$lib/Bedrooms.svelte';
	import BathroomGarage from '$lib/BathroomGarage.svelte';
	import ShedGarden from '$lib/ShedGarden.svelte';
	import Header from '$lib/header/Header.svelte';
	import Result from '$lib/Result.svelte';
	import Total from '$lib/Total.svelte';
	import { fade, slide } from 'svelte/transition';

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	import { mapReduce } from '../services/mapReduce';

	import LivingRoomStore from '../stores/LivingRoomStore';
	import KitchenStore from '../stores/KitchenStore';
	import DiningRoomStore from '../stores/DiningRoomStore';
	import BedroomsStore from '../stores/BedroomsStore';
  import BathroomGarageStore from '../stores/BathroomGarageStore';
  import ShedGardenStore from '../stores/ShedGardenStore';

	let startingValue = 0;
	let newTotal = 0;
	let maxSteps = 7;
	let stepCount = 0;
	let roomLabel = '';
	let stepDirection = '';

	let livingRoomTotal = 0;
	let kitchenTotal = 0;
	let diningRoomTotal = 0;
  let bedroomsTotal = 0;
  let bathroomGarageTotal = 0;
  let shedGardenTotal = 0

	let livingTotalStore = mapReduce(LivingRoomStore, (room) => room.selectedPrice);
	livingTotalStore.subscribe((total) =>calculateNewTotal(livingRoomTotal, total, 2000, 'livingRoom'));

	const kitchenTotalStore = mapReduce(KitchenStore, (item) => item.selectedPrice);
	kitchenTotalStore.subscribe((total) => calculateNewTotal(kitchenTotal, total, 2000, 'kitchen'));

	const diningRoomStore = mapReduce(DiningRoomStore, (item) => item.selectedPrice);
	diningRoomStore.subscribe((total) =>calculateNewTotal(diningRoomTotal, total, 2000, 'diningRoom'));

  const bedroomsStore = mapReduce(BedroomsStore, (item) => item.selectedPrice);
	bedroomsStore.subscribe((total) =>calculateNewTotal(bedroomsTotal, total, 2000, 'bedrooms'));

  const bathroomGarageStore = mapReduce(BathroomGarageStore, (item) => item.selectedPrice);
	bathroomGarageStore.subscribe((total) =>calculateNewTotal(bathroomGarageTotal, total, 2000, 'bathroomGarage'));

  const shedGardenStore = mapReduce(ShedGardenStore, (item) => item.selectedPrice);
	shedGardenStore.subscribe((total) =>calculateNewTotal(shedGardenTotal, total, 2000, 'shedGarden'));

	let progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	function handleClick(direction) {
		if (direction === 'start') {
			stepDirection = 'start';
			stepCount = 1;
		}

		if (direction === 'next') {
			stepDirection = 'next';
			stepCount++;
		} else if (direction === 'previous') {
			stepCount--;
		}

		if (stepCount === 1) {
			roomLabel = 'Living Room';
			calculateNewTotal(0, livingRoomTotal, 2000, 'livingRoom');
			progress.set(0.16);
		}

		if (stepCount === 2) {
			roomLabel = 'Kitchen';
			calculateNewTotal(0, kitchenTotal, 2000, 'kitchen');
			progress.set(0.32);
		}

		if (stepCount === 3) {
			roomLabel = 'Dining Room';
			calculateNewTotal(0, diningRoomTotal, 2000, 'diningRoom');
			progress.set(0.48);
		}

    if (stepCount === 4) {
			roomLabel = 'Bedrooms';
			calculateNewTotal(0, bedroomsTotal, 2000, 'bedrooms');
			progress.set(0.62);
		}

    if (stepCount === 5) {
			roomLabel = 'Bathroom, garage and other';
			calculateNewTotal(0, bathroomGarageTotal, 2000, 'bathroomGarage');
			progress.set(0.76);
		}

    if (stepCount === 6) {
			roomLabel = 'Shed and Garden';
			calculateNewTotal(0, shedGardenTotal, 2000, 'shedGarden');
			progress.set(1);
		}
	}

	function calculateNewTotal(start, end, duration, room) {
		if (!start && !end) {
			newTotal = 0;
			return;
		}

		var range = end - start;
		var current = start;

		if (range > 5000) {
			var increment = end > start ? 120 : -120;
		} else if (range > 3000) {
			var increment = end > start ? 90 : -90;
		} else {
			var increment = end > start ? 30 : -30;
		}

		var stepTime = Math.abs(Math.floor(duration / range));
		var timer = setInterval(function () {
			current += increment;
			newTotal = current.toLocaleString();
			if (Math.sign(range) > 0 && current >= end) {
				clearInterval(timer);
				newTotal = end;
				startingValue = newTotal;
			}

			if (Math.sign(range) < 0 && current <= end) {
				clearInterval(timer);
				newTotal = end;
				startingValue = newTotal;
			}

			if (room === 'kitchen') {
				kitchenTotal = newTotal;
			}

			if (room === 'livingRoom') {
				livingRoomTotal = newTotal;
			}

			if (room === 'diningRoom') {
				diningRoomTotal = newTotal;
			}

      if (room === 'bathroomGaage') {
				bathroomGarageTotal = newTotal;
			}

      if (room === 'shedGarden') {
				shedGardenTotal = newTotal;
			}
		}, stepTime);
	}
</script>

<svelte:head>
	<title>Paymentshield | Contents Calculator</title>
</svelte:head>

<Header />

{#if stepCount !== 0 && stepCount !== 7}
	<Total label={roomLabel} total={newTotal.toLocaleString()} progress={$progress} />
{/if}

{#if stepCount === 0}
	<div class="flex flex-col items-center pb-4">
		<p class="p-4 text-center">
			To get an idea of what your contents are worth, use this app to pick the rough value of each
			type of item in your house, room by room.
		</p>
		<div>
			<button
				class="bg-[#2C3536] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-64"
				on:click={() => handleClick('start')}
			>
				Start
			</button>
		</div>
	</div>
{:else if stepCount === 1}
	{#if stepDirection === 'start'}
		<div in:slide>
			<LivingRoom />
		</div>
	{:else}
		<div in:fade>
			<LivingRoom />
		</div>
	{/if}
{:else if stepCount === 2}
	<Kitchen />
{:else if stepCount === 3}
	<DiningRoom />
{:else if stepCount === 4}
	<Bedrooms />
{:else if stepCount === 5}
	<BathroomGarage />
{:else if stepCount === 6}
	<ShedGarden />
{:else if stepCount === 7}
	<Result />
{/if}

{#if stepCount > 0 && stepCount < maxSteps}
	<div class="p-3 flex justify-between">
		<button
			class="bg-[#2C3536] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full mr-2"
			class:disabled={stepCount === 1}
			disabled={stepCount === 1}
			on:click={() => handleClick('previous')}
		>
			Previous
		</button>

		<button
			class="bg-[#2C3536] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full ml-2"
			class:calculate={stepCount === 6}
			on:click={() => handleClick('next')}
		>
			{#if stepCount === 6}
				Calculate
			{:else}
				Next
			{/if}
		</button>
	</div>
{/if}

<style>
	button:disabled {
		background-color: grey;
		cursor: not-allowed;
	}

	.calculate {
		background-color: #fab519;
	}
</style>
