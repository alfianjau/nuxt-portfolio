import { configure } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

/* Start Define custom config */

import Vue from 'vue'

// Import Vue plugins
import Vuex from 'vuex'

// Import your global components.
// import Mybutton from '../components/stories/Button.vue'
import List from '../components/list/List.vue'

// Install Vue plugins.
Vue.use(Vuex)

// Register global components.
// Vue.component('my-button', Mybutton)
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})
Vue.component('List', List)

/* end Define custom config */

configure(require.context('../components', true, /\.stories\.js$/), module)
