import Vue from 'vue';
import AlertBox from '../../src/components/AlertBox.vue';

describe('AlertBox.vue', () => {
	it('Render correct contents', () => {
    const Constructor = Vue.extend(AlertBox)
    const vm = new Constructor().$mount()
    expect(vm.close).to.equal(true);
  });
});

