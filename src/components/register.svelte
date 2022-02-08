<script>
    import { onMount } from "svelte";
    import { register } from "../lib/api_utils.js";

    onMount(() => {
        // register
        let registerBtn = document.querySelector("#register-btn");
        registerBtn.addEventListener("click", register);
    });
</script>

<div class="login-container">
    <div class="icon-log-reg"><i class="fas fa-2x fa-key" /></div>
    <p class="log-reg-text">Register</p>
    <div class="login-item">
        <form action="" method="post" class="form form-login">
            <div class="form-field">
                <label class="user" for="login-username"
                    ><span class="hidden">Username</span></label
                >
                <input
                    class="input-item form-input"
                    id="register-username"
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
                    id="register-password1"
                    type="password"
                    placeholder="Password"
                    required
                />
            </div>

            <div class="form-field">
                <label class="lock" for="login-password"
                    ><span class="hidden">Repeat Password</span></label
                >
                <input
                    class="input-item form-input"
                    id="register-password2"
                    type="password"
                    placeholder="Repeat Password"
                    required
                />
            </div>

            <div class="form-field">
                <label for="login-password"
                    ><i class="far fa-envelope" /><span class="hidden"
                        >Email</span
                    ></label
                >
                <input
                    class="input-item form-input"
                    id="register-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div class="form-field">
                <label for="login-password"
                    ><i class="fas fa-file-signature" /><span class="hidden"
                        >First Name</span
                    ></label
                >
                <input
                    class="input-item form-input"
                    id="register-first-name"
                    type="text"
                    placeholder="Enter your first name"
                />
            </div>
            <div class="form-field">
                <label for="login-password"
                    ><i class="fas fa-file-signature" /><span class="hidden"
                        >Last Name</span
                    ></label
                >
                <input
                    class="input-item form-input"
                    id="register-last-name"
                    type="text"
                    placeholder="Enter your last name"
                />
            </div>

            <div class="form-field">
                <input type="submit" id="register-btn" value="Log in" />
            </div>
        </form>
    </div>
</div>

<style>
    .hidden {
        display: none;
    }
</style>
