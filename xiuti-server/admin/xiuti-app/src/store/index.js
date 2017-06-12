import Vuex from 'vuex'
import Vue from 'vue'
import desk from './modules/desk'
import breadCrumb from './modules/breadCrumb'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        breadCrumb,
        desk
    }
})
