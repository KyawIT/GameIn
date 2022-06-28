<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light ">
    <div class="container-fluid d-flex">
        <a class="navbar-brand" href="/"><img src="../Images/logo.svg" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav nav-element">
                <slot></slot>
            </div>
        </div>
    </div>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');
    /*font-family: 'Zilla Slab', serif;*/

    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
    /*font-family: 'Sora', sans-serif;*/

    .nav-element{
        font-family: 'Sora', sans-serif;
        font-size: 1.5em;
    }
</style>