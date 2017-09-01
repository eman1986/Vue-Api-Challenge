import App from './App';
import router from './router';
import store from './store';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './css/main.css';

Vue.use(VeeValidate);
Vue.use(VueSweetalert2);

// Check if there are any nav burgers
document.addEventListener('DOMContentLoaded', function() {
    // Get all "navbar-burger" elements
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any nav burgers
    if($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                let target = $el.dataset.target;
                let $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

new Vue({
    el:         '#app',
    router,
    store,
    render: h => h(App)
});