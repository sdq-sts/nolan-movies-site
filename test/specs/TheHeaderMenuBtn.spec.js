import test from 'ava'
import { mount } from '@vue/test-utils'
import TheHeader from '../../components/Base/TheHeaderMenuBtn'

let wrapper

const propsData = {
  isLoading: false,
  isMenuOpen: false
}

test.beforeEach(() => {
  wrapper = mount(TheHeader, { propsData })
})

test('TheHeaderMenuBtn.vue to display', (t) => {
  const menuIcon = wrapper.findAll('.menu-icon').wrappers
  t.is(menuIcon.length, 1)
})

test.afterEach(() => {
  wrapper = null
})
