<script>
    import { update } from "../lib/api_utils.js";
    import { onMount } from "svelte";
    onMount(() => {
        // update
        let updateButton = document.querySelector("#confirm-update");
        updateButton.addEventListener("click", update);
    });
</script>

<h2>Choose the data you want to change</h2>
<div class="custom-select">
    <div id="updateFields">
        <input class="fname-input" type="text" placeholder="First name" />
        <input class="lname-input" type="text" placeholder="Last name" />
        <input class="email-input" type="text" placeholder="Email" />
    </div>

    <div class="confirmbuttons">
        <button id="confirm-update">Update</button>
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
