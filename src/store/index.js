import Vue from 'vue'
import Vuex from 'vuex'
import { GetUsers, GetUserById, CreateUser, SaveUser, DeleteUser } from './actions';
import { SetUsers, SetUserDetails } from './mutations';

Vue.use(Vuex);

const state = {
    users: [],
    userDetails: {}
};

const store = new Vuex.Store({
    state,
    actions: {
        GetUsers,
        GetUserById,
        CreateUser,
        SaveUser,
        DeleteUser
    },
    mutations: {
        SetUsers,
        SetUserDetails
    },
    getters: {
        getUserDetails: state => {
            return state.userDetails;
        }
    },
    strict: true
});

export default store;