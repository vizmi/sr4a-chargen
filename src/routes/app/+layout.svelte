<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	export let data;
</script>

<div class="layout">
	<PageHeader user={data.user} />
	<main class="app-content">
		<slot />
	</main>
</div>

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.app-content {
		flex: 1;
		margin-top: 80px;
		padding: 2rem;
		max-width: 1200px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		box-sizing: border-box;
	}
</style>
