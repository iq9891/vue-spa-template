import CONSTANT from '@/constant';
{{#ui}}
{{#if_eq uiConfig "em-fe"}}
import emfe from 'emfe';
{{/if_eq}}
{{/ui}}

export default (result) => {
  // 是否有返回值，并且检查状态码是否是成功
  const { code, data, message } = result.data;
  // CONSTANT.AJAX_SUCCESS 以常量形式存储
  if (result && code === CONSTANT.AJAX_SUCCESS) {
    return data;
  }
  {{#ui}}
  {{#if_eq uiConfig "em-fe"}}
  return emfe.EmfeMessage.error({
    content: message,
  });
  {{/if_eq}}
  {{/ui}}
};
