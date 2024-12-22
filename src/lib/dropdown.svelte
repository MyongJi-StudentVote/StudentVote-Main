<script lang="ts">
	export let items: string[] = [];
	export let title = '';
	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<div class="w-full max-w-[300px] relative my-1">
	<button
		class="w-full px-5 py-3 bg-slate-100 hover:bg-slate-200 rounded-full text-left text-gray-800 text-base flex justify-between items-center transition-colors duration-200 {isOpen
			? 'rounded-b-none bg-slate-200'
			: ''}"
		on:click={toggleDropdown}
	>
		{title}
		<span class="text-xs transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"> ▼ </span>
	</button>

	{#if isOpen}
		<div
			class="absolute w-full bg-white border border-slate-200 border-t-0 rounded-b-lg shadow-sm z-10"
		>
			{#each items as item}
				<button
					class="w-full px-5 py-3 text-left text-blue-950 hover:bg-slate-50 text-base last:rounded-b-full"
				>
					{item}
				</button>
			{/each}
		</div>
	{/if}
</div>
