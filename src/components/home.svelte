<script>
    import { link } from "svelte-spa-router";
    import ProductCard from "./product_card.svelte";
    import { getProducts } from "../lib/api_utils";
    const ip = import.meta.env.VITE_BACKEND;
</script>

<!-- Cover img/text -->


<img src="images/bestkey.png" class="rounded-md w-fit my-4" alt="" />

<div class="col-2 flex flex-col  justify-center my-2">
    <h1>Check out our most popular product!</h1>
    <p>A keyboard that suits everyone, <br /> even kids!</p>
  
    
</div>
<div class="flex justify-center">
<a use:link href="/cover_product" class="btn w-64 flex justify-center"> I want to know more! →</a>
</div>


<h2 class="mt-20 text-xl"><b>Our Products</b></h2>



<!-- Product columns -->
<div class="grid-container lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
    {#await getProducts()}
        <p>...Loading Animation</p>
    {:then products}
        {#each products as product, i}
            {#if i == 1}
                <ProductCard
                    id={product.id}
                    image={product.image}
                    arrival={true}
                    incoming={false}
                    popular={false}
                />
            {/if}
            {#if i == 2}
                <ProductCard
                    id={product.id}
                    image={product.image}
                    arrival={false}
                    incoming={true}
                    popular={false}
                />
            {/if}
            {#if i == 3}
                <ProductCard
                    id={product.id}
                    image={product.image}
                    arrival={false}
                    incoming={false}
                    popular={true}
                />
            {/if}
            {#if i > 3}
                <ProductCard
                    id={product.id}
                    image={product.image}
                    arrival={false}
                    incoming={false}
                    popular={false}
                />
            {/if}
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
