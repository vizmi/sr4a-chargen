<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="user-profile">
	<img src={data.user.picture} alt="Profile of {data.user.given_name}" class="profile-picture" />
	<div class="user-info">
		<h2>{data.user.name}</h2>
		<p>{data.user.email}</p>
	</div>
</div>

<style>
	.user-profile {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 2rem;
	}

	.profile-picture {
		width: 128px;
		height: 128px;
		border-radius: 50%;
		object-fit: cover;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
