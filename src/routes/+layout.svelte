<script>
	import './styles.css';
	import '$lib/i18n';
	import { i18nReady } from '$lib/i18n';
	import { onMount } from 'svelte';

	let ready = false;

	onMount(async () => {
		await i18nReady;
		ready = true;
	});
</script>

{#if ready}
	<slot />
{/if}
