import Vue from 'vue';

import App from './App.vue';
import createRouter from './routers';
import titleMixin from './util/title';
// mixin for handling title
Vue.mixin(titleMixin);

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export default function createApp() {
  // 创建 router 实例
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App),
  });
  return { app, router };
}
