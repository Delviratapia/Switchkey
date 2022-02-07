import Home from './components/home.svelte'
import Account from './components/account.svelte'
import About from './components/about.svelte'
import API_keyboards from './components/api_keyboards.svelte'
import Contact from './components/contact.svelte'
import Cover_product from './components/cover_product.svelte'
import Developer_tab from './components/developer_tab.svelte'
import FAQ from './components/FAQ.svelte'
import Incoming_stock from './components/incoming_stock.svelte'
import Keyboards from './components/keyboards.svelte'
import Modal_login from './components/modal_login.svelte'
import Most_popular from './components/most_popular.svelte'
import New_arrivals from './components/new_arrivals.svelte'
import Policy from './components/policy.svelte'
import Shipping from './components/shipping.svelte'
import Modify from './components/modify.svelte'


const routes = {
    // Exact path
    '/': Home,
    // '/account': Account
    '/account': Account,
    '/account/modify': Modify,
    '/about': About,
    '/api_keyboards': API_keyboards,
    '/contact': Contact,
    '/cover_product/:id': Cover_product,
    '/developer_tab': Developer_tab,
    '/FAQ': FAQ,
    '/incoming_stock': Incoming_stock,
    '/keyboards': Keyboards,
    '/modal_login': Modal_login,
    '/most_popular': Most_popular,
    '/new_arrivals': New_arrivals,
    '/policy': Policy,
    '/shipping': Shipping,







    // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // Wildcard parameter
    // '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    // '*': NotFound,
}
export default routes
