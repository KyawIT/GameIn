<script>
    import {goto} from "$app/navigation";

    export let roomid;

    const Join = async () =>{
        await goto("/rooms/"+roomid);
    }
</script>

<div class="d-flex my-5 room-bg p-3 justify-content-between rounded">
    <p class="display-5 sora">{roomid}</p>
    <button class="sora btn btn-primary" on:click={Join}>Join</button>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
    /*font-family: 'Sora', sans-serif;*/

    .sora{
        font-family: 'Sora', sans-serif;
    }

    .room-bg{
        background-color: #85FFBD;
        background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
        background-size: cover;
    }
</style>