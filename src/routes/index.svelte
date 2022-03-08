<script>
	import { fade } from 'svelte/transition';
	import LivingRoom from '$lib/LivingRoom.svelte';
	import Kitchen from '$lib/Kitchen.svelte';
	import DiningRoom from '$lib/DiningRoom.svelte';
	import Bedrooms from '$lib/Bedrooms.svelte';
	import BathroomGarage from '$lib/BathroomGarage.svelte';
	import ShedGarden from '$lib/ShedGarden.svelte';
  import { goto } from '$app/navigation';
import Header from '$lib/header/Header.svelte';

	let stepCount = 0;

	function handleClick(direction) {
    if (stepCount === 6 && direction === 'next') {
      goto('/result') 
    }

		if (direction === 'start') {
			stepCount = 1;
		} else if (direction === 'next') {
			stepCount++;
		} else {
			stepCount--;
		}
	}
</script>

<svelte:head>
	<title>Paymentshield | Contents Calculator</title>
</svelte:head>

<Header />

{#if stepCount === 0}
	<div class="flex flex-col items-center">
		<p class="p-4 text-center">
			To get an idea of what your contents are worth, use the dropdown boxes to pick the rough value
			of each type of item in your house, room by room.
		</p>
		<div>
			<button
				class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-64"
				on:click={() => handleClick('start')}
			>
				Start
			</button>
		</div>
	</div>
{:else if stepCount === 1}
	<div in:fade>
		<LivingRoom />
	</div>
{:else if stepCount === 2}
	<div in:fade>
		<Kitchen />
	</div>
{:else if stepCount === 3}
	<div in:fade>
		<DiningRoom />
	</div>
{:else if stepCount === 4}
	<div in:fade>
		<Bedrooms />
	</div>
{:else if stepCount === 5}
	<div in:fade>
		<BathroomGarage />
	</div>
{:else if stepCount === 6}
	<div in:fade>
		<ShedGarden />
	</div>
{/if}

<div class="p-3 flex justify-between">
	{#if stepCount > 0}
		<button
			class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full mr-2"
			class:disabled={stepCount === 1}
			disabled={stepCount === 1}
			on:click={() => handleClick('previous')}
		>
			Previous
		</button>

		<button
			class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full ml-2"
			class:calculate={stepCount === 6}
			on:click={() => handleClick('next')}
		>
			{#if stepCount === 6}
				Calculate
			{:else}
				Next
			{/if}
		</button>
	{/if}
</div>

<style>
	button:disabled {
		background-color: grey;
		cursor: not-allowed;
	}

	.calculate {
		background-color: orange
	}
</style>
