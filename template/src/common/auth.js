import CONSTANT from '@/constant';

const Auth = {
  getToken() {
    return window.$cookie.get(CONSTANT.EVENT_TOKE);
  },
  loggedIn() {
    return !!window.$cookie.get(CONSTANT.EVENT_TOKE);
  },
  requireAuth(to, from, next, callback) {
    if (!Auth.loggedIn()) {
      window.location.replace(`${process.env.ACCOUNT}#/login?redirect=${encodeURIComponent(window.location.href)}`);
    } else if (Auth.loggedIn() && callback) {
      callback();
    } else {
      next();
    }
  },
};

export default Auth;
