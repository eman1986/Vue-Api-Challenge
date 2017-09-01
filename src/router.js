import CreateUser from './components/CreateUser.vue';
import UserDetails from './components/UserDetails.vue';
import UserList from './components/UserList.vue';
import UpdateUser from './components/UpdateUser.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', name: 'Home', component: UserList },
        { path: '/:id', name: 'Details', component: UserDetails },
        { path: '/create', name: 'Create', component: CreateUser },
        { path: '/update/:id', name: 'Edit', component: UpdateUser }
    ]
});