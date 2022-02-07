<script>
    import { onMount } from "svelte";
    import { login } from "../lib/api_utils.js";
    onMount(() => {
        // login
        let loginBtn = document.querySelector("#signin-btn-submit");
        loginBtn.addEventListener("click", login);
    });
</script>

<div class="login-container">
    <div class="icon-log-reg"><i class="fas fa-2x fa-sign-in-alt" /></div>
    <p class="log-reg-text">Sign In</p>
    <div class="login-item">
        <form action="" method="post" class="form form-login">
            <div class="form-field">
                <label class="user" for="login-username"
                    ><span class="hidden">Username</span></label
                >
                <input
                    class="input-item form-input"
                    id="login-username"
                    type="text"
                    placeholder="Username"
                    required
                />
            </div>

            <div class="form-field">
                <label class="lock" for="login-password"
                    ><span class="hidden">Password</span></label
                >
                <input
                    class="input-item form-input"
                    id="login-password"
                    type="password"
                    placeholder="Password"
                    required
                />
            </div>

            <div class="form-field">
                <input id="signin-btn-submit" type="submit" value="Log in" />
            </div>
        </form>
    </div>
</div>

<style>
    .hidden {
        display: none;
    }
</style>
