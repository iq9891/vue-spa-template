import Vue from 'vue';
{{#ui}}
{{#if_eq uiConfig "em-fe"}}
import emfe from 'emfe';
import 'em-fe/dist/css/emfe.css';
{{/if_eq}}
{{/ui}}
import VueCookie from 'em-cookie';
{{#jsonp}}
import jsonp from 'em-jsonp';
{{/jsonp}}

import store from '@/stores';

import App from './App';
import router from './routers';
import Http from './apis';

Vue.config.productionTip = false;

Vue.use(Http);
{{#ui}}
{{#if_eq uiConfig "em-fe"}}
Vue.use(emfe);
{{/if_eq}}
{{/ui}}
Vue.use(VueCookie);
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
// config.log 重定向
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
}
