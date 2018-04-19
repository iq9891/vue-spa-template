<template>
  <div class="home">
    <h2>hello world</h2>
    {{#ui}}
    {{#if_eq uiConfig "em-fe"}}
    <emfe-button>emfe button</emfe-button>
    {{/if_eq}}
    {{/ui}}
  </div>
</template>
<style lang="scss">
@import '../assets/styles/views/home.scss';
</style>
