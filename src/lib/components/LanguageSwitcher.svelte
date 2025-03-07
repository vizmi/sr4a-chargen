<script>
	import { locale } from 'svelte-i18n';

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'hu', name: 'Magyar' }
	];
</script>

<div class="language-switcher">
	{#each languages as lang}
		<button
			class="lang-button"
			class:active={$locale === lang.code}
			on:click={() => locale.set(lang.code)}
		>
			{lang.name}
		</button>
	{/each}
</div>

<style>
	.language-switcher {
		display: flex;
		gap: 0.5rem;
	}

	.lang-button {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(0, 255, 255, 0.2);
		border-radius: 4px;
		color: inherit;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		font-size: 0.8rem;
		transition: all 0.2s ease;
	}

	.lang-button:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(0, 255, 255, 0.4);
	}

	.lang-button.active {
		background: rgba(0, 255, 255, 0.2);
		border-color: rgba(0, 255, 255, 0.4);
	}
</style>
