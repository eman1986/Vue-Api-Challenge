import Vue from 'vue'
import Vuex from 'vuex'
import { GetUsers, GetUserById, CreateUser, SaveUser, DeleteUser } from './actions';
import { SetUsers, SetUserDetails, AddUser, UpdateUser, RemoveUser } from './mutations';

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
    strict: true
});

export default store;