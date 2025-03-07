<script>
	import { _ } from 'svelte-i18n';
	export let user;

	function handleImageError(event) {
		event.target.src = '/default-avatar.png';
	}

	function handleLogout() {
		window.location.href = '/logout';
	}
</script>

<header class="page-header">
	<div class="header-content">
		<div class="brand">{$_('app.title')}</div>
		<div class="user-profile">
			<div class="user-info">
				<h2>{user.given_name}</h2>
			</div>
			<img
				src={user.picture}
				alt="Profile of {user.given_name}"
				class="profile-picture"
				on:error={handleImageError}
			/>
			<button class="logout-button" on:click={handleLogout}>{$_('header.logout')}</button>
		</div>
	</div>
</header>

<style>
	.page-header {
		width: 100%;
		background: rgba(8, 18, 26, 0.95);
		border-bottom: 1px solid rgba(0, 255, 255, 0.1);
		box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		padding: 0.5rem 0;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.brand {
		font-weight: bold;
		font-size: 1.2rem;
		color: rgba(0, 255, 255, 0.8);
	}

	.user-profile {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.profile-picture {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid rgba(0, 255, 255, 0.2);
		box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
	}

	.user-info h2 {
		margin: 0;
		font-size: 1rem;
	}

	.logout-button {
		padding: 0.5rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(0, 255, 255, 0.2);
		border-radius: 4px;
		color: inherit;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.logout-button:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(0, 255, 255, 0.4);
	}
</style>
