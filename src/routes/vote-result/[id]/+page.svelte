<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<h1 class="text-2xl font-bold mb-8 leading-tight">개표 결과</h1>

<h1 class="text-xl font-bold mb-8 leading-tight">{data.data.departmentName}</h1>
<img src={data.data.resultImageUrl} />
