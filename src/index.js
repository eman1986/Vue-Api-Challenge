import App from './App';
import store from './store';
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VeeValidate);
Vue.use(VueSweetalert2);

new Vue({
    el:         '#app',
    store,
    components: {App}
});