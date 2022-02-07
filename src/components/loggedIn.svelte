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

<div class="account-center-items">
    <!-- options -->

    <ul class=" options-btn hidden">
        <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                href="/account/modify"
                use:link
                class="modify-userdata options-data">Modify data account</a
            >
        </li>
        <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a id="delete user" href="#" class="delete-userdata options-data"
                >Delete account</a
            >
        </li>
    </ul>
</div>
