<template>
  <div id="app" class="app" v-cloak>
    <img class="app-img" src="./assets/images/logo.png">
    <navbar></navbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';

export default {
  name: 'app',
  components: {
    navbar: loadcomponents.load('Navbar'),
  },
};
</script>

<style lang="scss">
@import "./assets/styles/base.scss";
</style>
