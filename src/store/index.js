import Vue from 'vue'
import Vuex from 'vuex'
import { GetUsers, GetUserById, CreateUser } from './actions';
import { SetUsers, SetUserDetails, AddUser } from './mutations';

Vue.use(Vuex);

const state = {
    users: [],
    userDetails: {},
    formValues: {}
};

const store = new Vuex.Store({
    state,
    actions: {
        GetUsers,
        GetUserById,
        CreateUser
    },
    mutations: {
        SetUsers,
        SetUserDetails,
        AddUser
    },
    getters: {
        getUsers: state => state.users,
        getUserDetails: state => state.userDetails
    }
});

export default store;