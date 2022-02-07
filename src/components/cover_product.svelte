<script>
    import { getProduct, buy } from "../lib/api_utils.js";
    export let params = {};
</script>

<body>
    <div class="cover-product">
        <h2 class="title-col-6">Most popular</h2>
        <div class="row">
            {#await getProduct(params.id) then product}
                <img id="prod-image" src={product.image} />
                <h4 id="prod-name">{product.name}</h4>
                <p id="stock">In stock: {product.stock}</p>
                <p id="price">${product.price}</p>
            {/await}
            <ul class=" options-btn hidden">
                <li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a
                        on:click={() => buy(params.id)}
                        class="modify-userdata options-data">Buy</a
                    >
                </li>
            </ul>
        </div>
    </div>
</body>

<style>
    .cover-product {
        margin: 0 auto;
    }

    .row {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>

