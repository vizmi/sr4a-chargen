import { init, register, getLocaleFromNavigator, waitLocale } from 'svelte-i18n';

register('en', () => import('./translations/en.json').then((module) => module.default));
register('hu', () => import('./translations/hu.json').then((module) => module.default));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});

// Export the waiting promise
export const i18nReady = waitLocale();
