import Vue from 'vue';
import Index1 from '@/views/Home';

describe('Home.vue', () => {
  it('should render title', () => {
    const Constructor = Vue.extend(Index1);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('这是活动时，模板项目');
  });
});
