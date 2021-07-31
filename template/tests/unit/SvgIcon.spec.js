import { shallowMount } from '@vue/test-utils'
import SvgIcon from '@/components/SvgIcon/index.vue'
describe('SvgIcon.vue', () => {
  it('name', () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        name: 'test'
      }
    })
    expect(wrapper.find('use').attributes().href).toBe('#icon-test')
  })
  it('className', () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        className: 'test'
      }
    })
    expect(wrapper.classes().length).toBe(2)
    wrapper.setProps({ className: 'test' })
    expect(wrapper.classes().includes('test')).toBe(true)
  })
})
