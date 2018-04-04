import Vue from 'vue';
import Router from 'vue-router';
import loadcomponents from '@/tools/loadcomponents';

Vue.use(Router);

const VueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: loadcomponents.load('Home', 'views'),
    },
  ],
});

export default VueRouter;
