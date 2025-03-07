<script>
	import { _ } from 'svelte-i18n';
	import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';
	import { assets } from '$app/paths';
	import './styles.css';
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div
	id="g_id_onload"
	data-client_id={PUBLIC_GOOGLE_CLIENT_ID}
	data-itp_support="true"
	data-login_uri="http://localhost:5173/login"
></div>

<div class="content-container">
	<h1>{$_('app.welcome')}</h1>
	<p>{$_('app.login.prompt')}</p>
</div>
