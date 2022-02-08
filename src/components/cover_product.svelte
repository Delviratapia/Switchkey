<script>
    import { getProduct, buy } from "../lib/api_utils.js";
    export let params = {};
</script>

<body>
    <div class="cover-product my-28">
        {#await getProduct(params.id) then product}
            <div class="flex flex-col sm:flex-row sm:justify-center">
                <img
                    class="sm:w-1/4 sm:h-1/4"
                    src={product.image}
                    alt="loading image"
                />
                <div class="sm:flex sm:items-center sm:gap-10 ml-12 r">
                    <div>
                        <h4 id="prod-name">{product.name}</h4>
                        <p id="stock">In stock: {product.stock}</p>
                        <p id="price">Price: ${product.price}</p>
                        <ul class=" options-btn">
                            <li class=" flex justify-center">
                                <!-- svelte-ignore a11y-missing-attribute -->
                                <a
                                    on:click={() => buy(params.id)}
                                    class=" flex modify-userdata options-data w-24 justify-center hover:bg-sky-500 hover:ring-sky-500 group-hover:text-white">Buy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        {/await}
    </div>
</body>

<style>
</style>
