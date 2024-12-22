<script lang="ts">
	import { slide } from 'svelte/transition';

	let items = [
		{
			label: 'ICT 융합 대학',
			options: ['융합소프트웨어 학부']
		},
		{
			label: '경영대학',
			options: ['경영대학', '경영학과', '경영정보학과']
		},
		{
			label: '인문대학',
			options: ['영어영문학과', '국어국문학과', '철학과']
		},
		{
			label: '사회과학대학',
			options: ['정치외교학과', '사회학과', '심리학과']
		},
		{
			label: '미디어커뮤니케이션대학',
			options: ['신문방송학과', '광고홍보학과', '영상학과']
		}
	];

	let activeIndex = -1;

	function toggleDropdown(index: number) {
		activeIndex = activeIndex === index ? -1 : index;
	}
	function handleClickOutside(event) {
		if (!event.target.closest('.dropdown')) {
			activeIndex = -1;
		}
	}
</script>

<h1 class="text-2xl font-bold mb-8 leading-tight">개표 결과</h1>

{#each items as item, i}
	<div class="dropdown relative w-full max-w-md">
		<button
			class="w-full px-6 py-3 bg-white rounded-full text-left text-blue-950 text-base flex justify-between items-center transition-colors duration-200 {activeIndex ===
			i
				? 'bg-white'
				: ''}"
			on:click|stopPropagation={() => toggleDropdown(i)}
		>
			{item.label}
			<svg
				class="w-6 h-6 fill-current transition-transform duration-200 {activeIndex === i
					? 'rotate-180'
					: ''}"
				viewBox="0 0 24 24"
			>
				<path d="M7 10l5 5 5-5z" />
			</svg>
		</button>

		{#if activeIndex === i}
			<div
				class="absolute top-full left-0 right-0 mt-2 bg-[#0a2158] border border-white/10 rounded-3xl overflow-hidden z-10"
				transition:slide={{ duration: 200 }}
			>
				{#each item.options as option}
					<button
						class="w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200"
					>
						<a href="/vote-result/1">{option} / 개표결과</a>
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/each}
