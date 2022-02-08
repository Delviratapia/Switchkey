<script>
    import { link } from "svelte-spa-router";
    import {
        deploy_update_menu,
        deploy_delete_menu,
    } from "../lib/menu_utils.js";
    import { onMount } from "svelte";
    import { delete_ } from "../lib/api_utils.js";
    onMount(() => {
        // deploys the update menu
        let updateMenuButton = document.querySelector(".modify-userdata");
        updateMenuButton.addEventListener("click", deploy_update_menu);

        // delete
        let deleteButton = document.querySelector(".delete-userdata");
        deleteButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete your account?")) {
                delete_();
            }
        });
    });
</script>

<div class="flex lg:w-1/4 w-3/4 sm:w-2/4 smh-2/4 justify-center bg-white border-gray-300 border-4 rounded-xl my-28">
    <!-- options -->
    <ul class=" options-btn items-center justify-evenly ">
    <h2 class="text-black rounded-lg p-4  w-full"><b>Settings</b></h2>

        <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                href="/account/modify"
                use:link
                class="modify-userdata options-data w-44 my-8">Modify data account</a
            >
        </li>
        <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a id="delete user" href="#" class="justify-center delete-userdata options-data w-44 my-8"
                >Delete account</a
            >
        </li>
        <li class="mb-12">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                on:click={() => {
                    localStorage.removeItem("token");
                    alert("logged out!");
                }}
                href="#"
                class="modify-userdata options-data justify-center mb-12">Logout</a
            >
        </li>

    </ul>
</div>
