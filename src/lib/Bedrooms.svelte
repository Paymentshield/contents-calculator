<script>
	import bedroomsStore from '../stores/BedroomsStore';
	import { fade, slide } from 'svelte/transition';

</script>

<div class="flex flex-col p-4" in:fade>
	{#each $bedroomsStore as room (room.id)}
		<h1 class="text-md font-bold mt-4">{room.label}</h1>
		<div class="relative inline-block w-full text-gray-700 mt-2">
			<select
				bind:value={room.selectedPrice}
				class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-md appearance-none focus:shadow-outline"
				placeholder="Regular input"
			>
				{#each room.prices as price (price)}
					<option value={price}>£{price}</option>
				{/each}
			</select>
			<div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
				<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"
					><path
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
						fill-rule="evenodd"
					/></svg
				>
			</div>
		</div>
	{/each}
</div>
