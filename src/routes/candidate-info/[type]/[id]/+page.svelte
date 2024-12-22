<script>
	import { page } from '$app/stores';

	$: candidateInfoImage = $page.url.searchParams.get('imageURL');
</script>

<div>
	<img src={candidateInfoImage} />
</div>
