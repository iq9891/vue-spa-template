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
<script>
  export default {
    mounted() {
      let a = 123; // {#}
      // equals: console.log(a)

      a = 456; // {#}
      // equals: console.log(a)

      this.testFunc1(a, a);

      this.testFunc2('test'); // {#}
      /**
        * equals:
        * const result = this.testFunc2('test')
        * console.log(result)
        */
    },
    methods: {
      testFunc1(a, b) { // {#}
        // equals: console.log(a, b)
        return [a, b];
      },

      testFunc2(a) {
        return a;
      },
    },
  };
</script>
<style lang="scss">
@import '../assets/styles/views/home.scss';
</style>
