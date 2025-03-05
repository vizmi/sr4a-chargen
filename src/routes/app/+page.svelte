<script>
	import PageHeader from '$lib/components/PageHeader.svelte';

	function handleImageError(event) {
		event.target.src = '/fallback-profile.png';
	}
</script>

<div class="content-container">
	<h1>Welcome to Your Dashboard</h1>
	<!-- Add your page content here -->
</div>

<style>
	/* Adjust the content container to account for the fixed header */
	:global(body) {
		padding-top: 80px; /* Adjust this value based on your header height */
	}
</style>
