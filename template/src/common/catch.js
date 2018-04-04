// import Router from '@/routers';
// import CONSTANT from '@/constant';
{{#ui}}
{{#if_eq uiConfig "em-fe"}}
import emfe from 'emfe';
{{/if_eq}}
{{/ui}}

let flg = true;
export default (res) => {
  if (flg) {
    flg = false;
    if (res.status === 401) {
      window.location.replace(`${process.env.ACCOUNT}#/login?redirect=${encodeURIComponent(window.location.href)}`);
    } else {
      {{#ui}}
      {{#if_eq uiConfig "em-fe"}}
      emfe.$EmfeMessage.error({
        content: res.statusText,
      });
      {{/if_eq}}
      {{/ui}}
      console.log(res.statusText);
    }
  }
};
