<script>
	import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';
	import { assets } from '$app/paths';
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async></script>
	<style>
		/* Base styles */
		body {
			background: url('/shadowrun-background.webp') no-repeat center center fixed;
			background-size: cover;
			background-color: #08121a; /* Adjusted to match the dark tones of the image */
			margin: 0;
			padding: 0;
			font-family: 'Arial', sans-serif;
			color: #e0e0e0;
			min-height: 100vh;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			padding-bottom: 2rem;
			box-sizing: border-box;
		}

		/* Content container with neo-cyberpunk styling */
		.content-container {
			background: rgba(8, 18, 26, 0.85);
			border: 1px solid rgba(0, 255, 255, 0.1);
			box-shadow:
				0 0 20px rgba(0, 255, 255, 0.1),
				inset 0 0 20px rgba(0, 255, 255, 0.05);
			backdrop-filter: blur(10px);
			width: 60%;
			max-width: 800px;
			padding: 2rem;
			border-radius: 5px;
			position: relative;
		}

		/* Neon accent line */
		.content-container::before {
			content: '';
			position: absolute;
			top: 0;
			left: 20%;
			right: 20%;
			height: 1px;
			background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent);
		}

		/* Typography */
		h1,
		h2,
		h3 {
			color: #00ffff;
			text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
			margin-bottom: 1rem;
		}

		/* Links with cyber effect */
		a {
			color: #00ffff;
			text-decoration: none;
			position: relative;
			transition: color 0.3s ease;
		}

		a:hover {
			color: #fff;
			text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
		}
	</style>
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
