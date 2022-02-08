<script>
    import { link } from "svelte-spa-router";
</script>

<!-- Flecha boton para regresar arriba -->
<a id="getTop" />

<!-- logo imagen -->
<div>
    <img
        src="images/logo (1) largo1.png"
        alt="SwitchKeys"
        class="  w-fit 4"
    />
</div>

<!-- Navegation bar  -->
<nav
    class="flex flex-col lg:flex-row lg:space-around flex-nowrap justify-around content-around gap-10 sm:gap-2"
>
    <ul class="flex gap-4 justify-center">
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
            <a href="/keyboards" use:link class="nav-links">Accesories</a>
        </li>
    </ul>
    <!-- searchbar -->
    <div class="search lg:w-1/2 ">
        <input
            type="text"
            class="searchTerm "
            placeholder="What are you looking for?"
        />

        <button type="submit" class="searchButton border-[3px] -translate-x-[4px] translate-y-[2px] sm:-translate-x-2 sm:translate-y-[1px] lg:-translate-x-1 lg:translate-y-[2px]">
            <i class="fa fa-search" />
        </button>
    </div>

    <ul class="flex  gap-4 justify-center ">
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
