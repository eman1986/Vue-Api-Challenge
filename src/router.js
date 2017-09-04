import CreateUser from './components/CreateUser.vue';
import UserDetails from './components/UserDetails.vue';
import UserList from './components/UserList.vue';
import UpdateUser from './components/UpdateUser.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    linkActiveClass: 'is-active',
    routes: [
        { path: '/', name: 'Home', component: UserList },
        { path: '/create', name: 'Create', component: CreateUser },
        { path: '/details/:id', name: 'Details', component: UserDetails },
        { path: '/update/:id', name: 'Edit', component: UpdateUser }
    ]
});