import Vue from 'vue';
import Router from 'vue-router';
import routes from './site';

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes,
  });
}
