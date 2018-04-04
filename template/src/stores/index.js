// Vuex 官方文档 https://vuex.vuejs.org/zh-cn/
// 我们组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: debug,
});
