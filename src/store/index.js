import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as mutations from './mutations'
import { getUsers }  from '../api';

Vue.use(Vuex);

const state = {
    users: getUsers(),
    formValues: {}
};

const store = new Vuex.Store({
    state,
    actions,
    mutations
});

export default store;