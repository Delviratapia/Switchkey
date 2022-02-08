<script>
    import { update } from "../lib/api_utils.js";
    import { onMount } from "svelte";
    onMount(() => {
        // update
        let updateButton = document.querySelector("#confirm-update");
        updateButton.addEventListener("click", update);
    });
</script>

<h2 class="mt-24 text-xl"><b>Choose the data you want to change</b></h2>
<div class="custom-select">
    <div id="updateFields">
        <input class="fname-input border-2 border-gray-500 mb-3" type="text" placeholder="First name" />
        <input class="lname-input border-2 border-gray-500 mb-3" type="text" placeholder="Last name" />
        <input class="email-input border-2 border-gray-500 mb-3" type="text" placeholder="Email" />
    </div>

    <div class="confirmbuttons">
        <button id="confirm-update" class="hover:bg-gray-500  group-hover:text-white p-4 rounded-lg bg-[#dcba9e]">Update</button>
        <button id="cancel" class="hidden">Cancel</button>
    </div>
</div>

<style>
    .custom-select {
        margin: 0 auto;
    }

    #updateFields {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    .confirmbuttons {
        margin-bottom: 3rem;
    }
</style>
