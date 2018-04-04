<template>
  <div class="home">
    <h1 class="home-title">hello world</h1>
    {{#ui}}
    {{#if_eq uiConfig "em-fe"}}
    <emfe-button>emfe button</emfe-button>
    {{/if_eq}}
    {{/ui}}
  </div>
</template>
<script>
export default {
  name: 'home',
};
</script>
<style lang="scss">
@import "../assets/styles/views/home.scss";
</style>
