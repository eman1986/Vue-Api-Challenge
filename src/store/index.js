import Vue from 'vue'
import Vuex from 'vuex'
import { GetUsers, CreateUser } from './actions';
import { SetUsers, AddUser } from './mutations';

Vue.use(Vuex);

const state = {
    users: [],
    formValues: {}
};

const store = new Vuex.Store({
    state,
    actions: {
        GetUsers,
        CreateUser
    },
    mutations: {
        SetUsers,
        AddUser
    }
});

export default store;