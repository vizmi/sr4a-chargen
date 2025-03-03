<script>
	import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';
	import { assets } from '$app/paths';
	import './styles.css';
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async></script>
</svelte:head>
<div
	id="g_id_onload"
	data-client_id={PUBLIC_GOOGLE_CLIENT_ID}
	data-context="use"
	data-auto_select="true"
	data-close_on_tap_outside="false"
	data-itp_support="true"
	data-login_uri="oauth"
></div>
<div class="content-container">
	<h1>Welcome to the Shadows, Chummer!</h1>
	<p>Log in with google to access the site</p>
</div>
