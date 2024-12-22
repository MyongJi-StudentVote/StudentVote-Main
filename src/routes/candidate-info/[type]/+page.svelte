<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-4">
	{#each data.data.candidateInfoList as candidate}
		<div class="font-bold">기호 {candidate.id}번 | {candidate.candidateName}</div>

		<div class="w-full px-6 py-3 bg-white rounded-full text-left text-blue-950 text-base">
			<a
				class="w-full"
				href="{data.type}/{candidate.id}?imageURL={encodeURIComponent(
					candidate.candidateInfoImage
				)}">입후보자 정보</a
			>
		</div>
		<div class="w-full px-6 py-3 bg-white rounded-full text-left text-blue-950 text-base">
			<a class="w-full" href={candidate.candidateContactAddress}>선거 운동 본부 SNS</a>
		</div>
	{/each}
</div>
