<script>
	export let total = 0;
	export let label = '';
</script>

<div class="flex flex-row items-baseline p-4 sticky top-0 z-50 bg-[#59797c] text-white shadow-xl">
	<h4 class="text-2xl font-bold mr-5">{label}</h4>
	<h1 class="text-3xl font-bold sticky top-0 z-50 grow text-right">£{total}</h1>
</div>
