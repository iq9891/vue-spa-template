import axios from 'axios';
import guid from 'em-underline/guid';
import CONSTANT from '@/constant';
import Router from '@/routers';

/* eslint-disable no-bitwise */
const getGuid = window.$cookie.get('X-Session-Id') || guid();
window.$cookie.set('X-Session-Id', getGuid);

/**
 * Create Axios
 */
export const http = axios.create({
  timeout: 60000,
});

/**
 * Headers Config
 */
http.defaults.headers.common = {
  'X-Session-Id': getGuid,
};

/**
 * 处理请求时的姿势
 */
http.interceptors.request.use((config) => {
  config.headers.common[CONSTANT.EVENT_TOKE] = window.$cookie.get(CONSTANT.EVENT_TOKE);
  return config;
}, () => {
  // 跳转到错误页面
  Router.push({
    name: 'Error',
  });
});

export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return http;
      },
    },
  });
}
