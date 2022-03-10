<script>
	export let total = 0;
	export let label = '';
	export let progress = 0;
</script>

<div class="flex flex-col sticky top-0 z-50 bg-[#2C3536] text-white shadow-xl">
	<div class="flex flex-row items-baseline p-4">
		<h4 class="text-2xl font-bold mr-5">{label}</h4>
		<h1 class="text-3xl font-bold sticky top-400 z-50 grow text-right">£{total}</h1>
	</div>
	<progress value={progress} />
</div>

<style>
	progress {
		display: block;
		width: 100%;
		height: 8px;
		background: aliceblue;
		color: aliceblue;
	}

	progress {
		color: lightblue;
	}

	progress::-moz-progress-bar {
		background: lightcolor;
	}

	progress::-webkit-progress-value {
		background: #FAB519;
	}

	progress::-webkit-progress-bar {
		background: #808e8f
	}
</style>
