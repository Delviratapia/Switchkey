<script>
    import { link } from "svelte-spa-router";
    export let id, image, arrival, incoming, popular;
    let addr = `/cover_product/${id}`;
</script>

<div class="grid-item">
    {#if arrival}
        <h1><a href="productsNewarrivals.html">New arrivals</a></h1>
    {/if}
    {#if incoming}
        <h1><a href="Incomingstock.html">Incoming stock</a></h1>
    {/if}
    {#if popular}
        <h1><a href="mostpopular.html">Most popular</a></h1>
    {/if}
    <a href={addr} use:link> <img src={image} /> </a>
</div>
