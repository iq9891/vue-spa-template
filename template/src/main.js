import Vue from 'vue';
import VueCookie from 'em-cookie';
{{#ui}}
{{#if_eq uiConfig "em-fe"}}
import emfe from 'emfe';
{{/if_eq}}
{{/ui}}
{{#jsonp}}
import jsonp from 'em-jsonp';
{{/jsonp}}

import store from '@/stores';

import App from './App';
import router from './routers';
import Http from './apis';

Vue.config.productionTip = false;

Vue.use(Http);
Vue.use(VueCookie);
{{#ui}}
{{#if_eq uiConfig "em-fe"}}
Vue.use(emfe);
{{/if_eq}}
{{/ui}}
{{#jsonp}}
Vue.use(jsonp);
{{/jsonp}}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
