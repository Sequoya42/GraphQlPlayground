// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import apolloClient from '@/utils/graphql'

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


// import CodeSnippet from '@/components/CodeSnippet';
// Vue.component('CodeSnippet', CodeSnippet);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  template: '<App/>',
  components: { App }
})
