<script>
    import { link } from "svelte-spa-router";
    export let id, image, arrival, incoming, popular;
    let addr = `/cover_product/${id}`;
</script>

<div class="grid-item grid">
    {#if arrival}
        <h1><a href="productsNewarrivals.html"><b></b></a></h1>
    {/if}
    {#if incoming}
        <h1><a href="Incomingstock.html" class="order-8"><b></b></a></h1>
    {/if}
    {#if popular}
        <h1><a href="mostpopular.html"><b></b></a></h1>
    {/if}
    <a href={addr} use:link> <img src={image} /> </a>
</div>
