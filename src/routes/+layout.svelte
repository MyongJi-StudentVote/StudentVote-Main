<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-blue-950 text-white w-full min-h-screen max-w-lg p-8 text-center">
	<div class="text-sm font-semibold tracking-wide uppercase mb-4">MJU VOTE</div>
	<div class="border-t border-white opacity-50 mb-6"></div>

	<div class="mt-32 space-y-10">
		{@render children()}
	</div>
</div>
