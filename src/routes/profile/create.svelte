<script>
	import { UploadImage, AddAccount, GetUsername } from '../../lib/firebase.ts';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Navbar from '../../components/Navbar.svelte';
	import { logOut } from '$lib/store';

	let placeholderPfp =
		'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';
	let image, uid, email;
	$: uiImg = '';
	$: upLoadedImg = '';
	let username = '';
	onMount(() => {
		uid = localStorage.getItem('uid');
		email = localStorage.getItem('email');
		console.log(GetUsername(uid));
	});

	const OnFileSelected = (e) => {
		let image = e.target.files[0];
		upLoadedImg = image;
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			image = e.target.result;
			uiImg = image;
		};
	};

	const CreateAccount = async () => {
		const imgUrl = await UploadImage(upLoadedImg, uid);
		await AddAccount(uid, email, imgUrl, username);
		localStorage.setItem('photoUrl', imgUrl);
		localStorage.setItem('username', username);
		await goto('../profile');
	};
</script>
<svelte:head>
    <title>GameIn · Create</title>
</svelte:head>
<Navbar>
	<a class="nav-link mx-2 " on:click={logOut}><i class="bi bi-box-arrow-in-left"></i> Log Out</a>
</Navbar>

<div class="position-absolute top-50 start-50 translate-middle">
	<h1 class="display-2 text-center sora">Only 1 Step left</h1>
	<div class="text-center">
		{#if uiImg}
			<img
				src={uiImg}
				class="rounded-circle profile-pic border border-5 bg-light pfp-size"
				alt="Profile Pic"

			/>
		{:else}
			<img
				src={placeholderPfp}
				class="rounded-circle profile-pic border border-5 bg-light pfp-size"
				alt="Profile Pic"

			/>
		{/if}
	</div>

	<h1 class="display-4 text-center sora">"{username || 'Your Name'}"</h1>
	<form on:submit|preventDefault={CreateAccount} class="container">
		<div class="input-group mb-3">
			<span class="input-group-text" id="inputGroup-sizing-default">Username</span>
			<input
				bind:value={username}
				maxlength="15"
				type="text"
				class="form-control"
				aria-label="Sizing example input"
				aria-describedby="inputGroup-sizing-default"
				required
			/>
		</div>
		<div class="input-group mb-3">
			<label class="input-group-text" for="inputGroupFile01">Profile Picture</label>
			<input
				on:change={(e) => OnFileSelected(e)}
				bind:this={image}
				type="file"
				class="form-control"
				id="inputGroupFile01"
				accept="image/*"
                required
			/>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-primary btn-lg">Create</button>
		</div>
	</form>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
    /*font-family: 'Sora', sans-serif;*/

    .sora{
        font-family: 'Sora', sans-serif;
    }
	.pfp-size {
		width: 20em;
        height: 20em;
		object-fit: cover;
	}

</style>
