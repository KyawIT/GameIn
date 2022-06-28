<script>
    import Navbar from "../components/Navbar.svelte";
</script>
<svelte:head>
    <title>GameIn · Home</title>
</svelte:head>
<Navbar>
    <a class="nav-link active mx-2" href="/">Home</a>
    <a class="nav-link mx-2" href="/auth/signin">Sign In</a>
    <a class="nav-link mx-2" href="/auth/signup">Sign Up</a>
</Navbar>
<main>
    <div class="container-fluid d-flex vh-100 bg-primary" id="main-section">
        <div class="row justify-content-center align-self-center col-3  " id="title">
            <div class="main-title">GameIn</div><br>
            <div class="slogan">A place where you can get the best out of you</div>
        </div>
        <img id="gaming-img" class="img-over-txt row justify-content-center col align-self-center" src="../Images/undraw_gaming_re_cma2.svg" alt="">
    </div>
</main>
<section class="container-fluid vh-100 bg-light mobile-flex">
    <img id="img" class="" src="../Images/undraw_social.svg" alt="">
    <div class="my-auto">
        <h1 class="col-sm-10 mx-5 ">Discover the world right in your room!<br></h1>
        <p id="info1" class="col-sm-9 mx-5">Our goal is to connect gamers all over the world and create new friendships. With our party radar system you can choose to create new adventures in public parties all over the world. You can create private parties too if you want to have a gaming night with your bros. The most important thing for us is for you to have fun!</p>
    </div>
</section>
<section class="container-fluid mobile-flex vh-50 mt-5">
    <div class="my-auto">
        <h1 class="col-sm-10 mx-5">Climb to the top!<br></h1>
        <p id="info2" class="col-sm-9  mx-5 ">We want to support beginner and professional esports teams and players. For this reason we want to create the perfect enviroment for them to compete and achieve the best results in their career. There will be a plenty of esports teams waiting for you to show them who you are!</p>
    </div>
    <img id="img2" class="row justify-content-center col align-self-center" src="../Images/undraw_esports.svg" alt="">
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:ital,wght@1,900&display=swap');

    .mobile-flex{
        display: flex;
    }

    .img-over-txt{
        z-index: 100;
    }

    #title{
        font-family: 'Roboto', sans-serif;
        font-family: 'Roboto Mono', monospace;
        color: white;
        font-size:5em;
    }

    #gaming-img{
        width: 50%;
        height: 60%;
    }

    #img{
        width: 50%;
    }

    #img2{
        width: 65%;
    }

    .main-title{
        margin-bottom: 0;
    }

    .slogan{
        font-size: 0.2em;
        margin-left: 23px;
    }

    #info1, #info2{
        font-size: 1.2em;
        font-weight: 300;
    }

    #main-section{
        background: hsla(258, 100%, 35%, 1);

        background: linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

        background: -moz-linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

        background: -webkit-linear-gradient(90deg, hsla(258, 100%, 35%, 1) 0%, hsla(295, 94%, 76%, 1) 100%);

    }

    @media screen and (max-width: 500px){
        #title{
            font-size: 3em;
        }

        #gaming-img{
            width: 30%;
            height: 30%;
            margin-left: 15%;
        }

        .slogan{
            font-size: 0.2em;
        }

        #img{
            width: 100%;
            margin-bottom: 10%;
        }

        #img2{
            width: 100%;
            margin-top: 25%;
        }

        .mobile-flex{
            display: block;
        }
    }

</style>