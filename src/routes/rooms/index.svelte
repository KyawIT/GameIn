<script>
    import {GetCollections} from "../../lib/firebase.ts";
    import Room from '../../components/Room.svelte';

    let rooms = [];
    GetCollections().then(docs => rooms = (docs));
</script>

<div class="container text-center">
    {#each rooms as room}
        <Room roomid="{room}"/>
    {/each}
</div>