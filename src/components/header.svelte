<script>
    import { link } from "svelte-spa-router";
</script>

<!-- Flecha boton para regresar arriba -->
<a id="getTop" />

<!-- logo imagen -->
<div>
    <img src="images/logo (1) largo1.png" alt="SwitchKeys" class=" h-32 w-3/4 " />
</div>

<div class="header flex flex-row justify-between gap-7 flex-nowrap">
    <!-- Navegation bar  -->
    <nav class="">
        <div class="">
            <ul class="" id="">
                <li>
                    <a href="/keyboards" use:link class="nav-links">Keyboard</a>
                </li>
                <li>
                    <a href="/keyboards" use:link class="nav-links">Switches</a>
                </li>
                <li>
                    <a href="/keyboards" use:link class="nav-links">Keycaps</a>
                </li>
                <li>
                    <a href="/keyboards" use:link class="nav-links"
                        >Accesories</a
                    >
                </li>
            </ul>
            <!-- searchbar -->
            <div class="search">
                <input
                    type="text"
                    class="searchTerm"
                    placeholder="What are you looking for?"
                />

                <button type="submit" class="searchButton">
                    <i class="fa fa-search" />
                </button>
            </div>
        </div>

        <ul class="">
            <li>
                <a href="/" use:link class="nav-links">Home</a>
            </li>
            <li>
                <a href="/account" use:link class="nav-links">MyAccount</a>
            </li>
            <li>
                <a href="/contact" use:link class="nav-links">Contact Us</a>
            </li>
            <li>
                <img
                    class="imgshoppingcart "
                    src="images/Shoppingcart.png"
                    alt="Shopping Cart"
                    width="30px"
                />
            </li>
        </ul>
    </nav>
</div>
