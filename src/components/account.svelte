<script>
    import Login from "./login.svelte";
    import LoggedIn from "./loggedIn.svelte";
    import Register from "./register.svelte";
    import { get_user_id } from "../lib/api_utils.js";
</script>

<div class="auth-container flex-col gap-10 sm:flex-row">
    {#await get_user_id() then res}
        {#if res.code == "token_not_valid"}
            <Login />
            <Register />
        {:else}
            <LoggedIn />
        {/if}
    {/await}
</div>

<style>
    .hidden {
        display: none;
    }
</style>
