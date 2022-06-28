<script>
    import {onMount} from "svelte";

    export let message;
    export let time;
    export let username;

    let usernameLocal = ""
    onMount(()=>{
        usernameLocal = localStorage.getItem("username")
    })
</script>


{#if username === usernameLocal}
    <div class="receiver messages">
        <div class="message">
            <p class="username">{username}</p>
            <p>{message}</p>
        </div>
    </div>
    {:else}
    <div class="sender messages">
        <div class="message">
            <p class="username">{username}</p>
            <p>{message}</p>
        </div>
    </div>
{/if}

<style>
    .username{
        font-weight: 750;
    }

    .messages {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }

    .message {
        border-radius: 20px;
        padding: 8px 15px;
        display: inline-block;
    }

    .receiver{
        align-items: flex-end;
    }

    .receiver .message {
        color: white;
        margin-left: 25%;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        background-size: cover;
        position: relative;
        text-align: right;
    }

    .sender {
        align-items: flex-start;
    }

    .sender .message {
        margin-right: 25%;
        background-color: #85FFBD;
        background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
        position: relative;
    }
</style>