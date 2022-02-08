<script>
    import { link } from "svelte-spa-router";

</script>
<div class="footer flex justify-evenly">
    <div class="footer-col-1 justify-between">
        <h3 class="translate-y-2">Information</h3>
        <ul>
            <li><a href="/about" use:link>About us</a></li>
            <li><a href="/policy" use:link>Privacy policy</a></li>
            <li><a href="/contact" use:link>Contact us</a></li>
            <li><a href="/FAQ" use:link>FAQ</a></li>
            <li><a href="/shipping" use:link>Shipping</a></li>
        </ul>
    </div>
    <div class="footer-logo my-auto">
        <img
            class="my-0 mx-auto"
            src="images/logo (1).png"
            alt="SwitchKeys"
            width="200px"
        />
    </div>
    <div class="flex footer-col-2">
        <ul class="img-col-2 ">
            <li class="mr-2">
                <img src="images/paypal.png" alt="Paypal" width="50px" />
            </li>
            <li>
                <img src="images/visa.png" alt="Visa" width="50px" />
            </li>
            <li>
                <img
                    src="images/mastercard.png"
                    alt="mastercard"
                    width="50px"
                />
            </li>
        </ul>
    </div>
    <!-- get top button -->
</div>
