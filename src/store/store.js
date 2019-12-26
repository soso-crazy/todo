import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import { mutations } from './mutations'
import { getters } from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutations
})

if (module.hot) {
    module.hot.accept([
        './getters',
        './mutations'
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            mutations: require('./mutations')
        })
    })
}

export default store