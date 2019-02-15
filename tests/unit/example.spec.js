import { mount } from '@vue/test-utils'
import home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders greeting text on landing page', () => {
    const wrapper = mount(home)
    expect(wrapper.html()).toContain('<span class="font-weight-bold"> your path!</span>')
  })
})
