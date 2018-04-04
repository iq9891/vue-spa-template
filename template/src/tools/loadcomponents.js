import CONSTANT from '@/constant';
/*
 * 模块加载器
 * cpt string must 需要加载的模块
 * type string maybe 是视图模块还是组件模块
 * holder string maybe 所处的文件夹
 */
export default {
  load: (cpt, type = 'components', holder = '') => () => ({
    // 需要加载的组件. 应当是一个 Promise
    component: import(`@/${type}${holder}/${cpt}`),
    // loading 时应当渲染的组件
    // loading: LoadingComp,
    // 出错时渲染的组件
    // error: ErrorComp,
    delay: CONSTANT.ROUTER_LOADING_DALAY,
    timeout: CONSTANT.ROUTER_LOADING_TIMEOUT,
  }),
};
