<script lang="ts">
    import { auth, googleProvider } from '$lib/firebase.ts';
    import { goto } from '$app/navigation';
    import Navbar from "../../components/Navbar.svelte";

    let email = '',
        password = '';

    $: errCode = null;

    const SignInGoogle = async () => {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        localStorage.setItem('username', user.displayName);
        localStorage.setItem('email', user.email);
        localStorage.setItem('photoUrl', user.photoURL);
        localStorage.setItem('uid', user.uid);
        await goto('../profile');
    };

    const SignInManual = async () =>{
        try {
            const res = await auth.signInWithEmailAndPassword(email, password)
            const user = res.user;
            localStorage.setItem('username', user.displayName);
            localStorage.setItem('email', user.email);
            localStorage.setItem('photoUrl', user.photoURL);
            localStorage.setItem('uid', user.uid);
            await goto("../profile");
        }catch (e){
            errCode = e.code;
        }
    }
</script>

<svelte:head>
    <style>
        body {
            background: hsla(258, 100%, 35%, 1);

            background: linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

            background: -moz-linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

            background: -webkit-linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
        }
        
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        #signIn{
            animation: fadeIn 1s;
        }
    </style>

    <title>GameIn · Sign In</title>
</svelte:head>
<Navbar>
    <a class="nav-link mx-2" href="/">Home</a>
    <a class="nav-link mx-2" href="/auth/signup">Sign Up</a>
</Navbar>
<div class="container mt-5" id="signIn">
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
                <div class="card-body p-4 p-sm-5">
                    <h5 class="text-center display- sign-txt">Welcome Back!</h5>
                    <h5 class="card-title text-center mb-5 fw-light display-3 sign-txt">Sign In</h5>
                    <form on:submit|preventDefault={SignInManual}>
                        {#if errCode}
                            <div class="alert alert-danger" role="alert">{errCode} </div>
                        {/if}
                        <div class="form-floating mb-3">
                            <input
                                    required
                                    bind:value={email}
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                    bind:value={password}
                                    required
                                    type="password"
                                    class="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                            />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                            <label class="form-check-label" for="rememberPasswordCheck">
                                Remember password
                            </label>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit"
                            >Sign in</button
                            >
                        </div>
                        <hr class="my-4" />
                    </form>
                    <div class="d-grid mb-2">
                        <button on:click={SignInGoogle} class="btn btn-google btn-login text-uppercase fw-bold">
                            <i class="bi bi-google" /> Sign in with Google
                        </button>
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary btn-login text-uppercase fw-bold">
                            <i class="bi bi-meta" /> Sign in with Meta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');
    /*font-family: 'Zilla Slab', serif;*/
    .sign-txt{
        font-family: 'Zilla Slab', serif;
    }

    .btn-login {
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
        padding: 0.75rem 1rem;
    }

    .btn-google {
        color: white !important;
        background-color: #ea4335;
    }
</style>
