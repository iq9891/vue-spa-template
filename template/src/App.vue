<template>
  <div id="app" class="app" v-cloak>
    <img class="app-img" src="./assets/images/logo.png">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
{{#ui}}
{{#if_eq uiConfig "em-fe"}}
<style lang="scss">
@import '../node_modules/em-fe/dist/css/emfe.css';
</style>
{{/if_eq}}
{{/ui}}
