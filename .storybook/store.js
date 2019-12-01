// You can do the same for getters, mutations and states
import actions from '@/store/actions'
import Vuex from 'vuex'
import axios from 'axios'
let store = new Vuex.Store({
  actions: actions
})
/**
  Bind Axios to Store as we don't have access to Nuxt's $axios instance here. See caveat below.
**/
store.$axios = axios
export default store
