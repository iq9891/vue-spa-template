<template>
  <div class="home">
    <h1>水滴官方网站</h1>
    <router-link :to="{ name: 'About' }">关于水滴</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      const name = '水滴官方网站'; // {#} -sign
      return {
        name,
      };
    },
    title() {
      return '水滴官方网站';
    },
  };
</script>
