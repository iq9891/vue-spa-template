<template>
  <div class="site">
    <h1>水滴</h1>
    <p>超凡脱俗的那么亲近。</p>
    <p>对！它是 water 。</p>
    <router-link :to="{ name: 'Home' }">查看首页</router-link>
  </div>
</template>
<script>
  export default {
    title() {
      return '关于水滴';
    },
  };
</script>
