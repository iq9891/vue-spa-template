<template>
  <div id="app" class="app" v-cloak>
    <img class="app-img" src="./assets/images/logo.png">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
