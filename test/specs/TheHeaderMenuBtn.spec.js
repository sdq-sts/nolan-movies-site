import test from 'ava'
import { mount } from '@vue/test-utils'
import TheHeader from '../../components/Base/TheHeaderMenuBtn'

let wrapper

test.beforeEach(() => {
  wrapper = mount(TheHeader)
})

test('TheHeaderMenuBtn.vue to display', (t) => {
  const menuIcon = wrapper.findAll('.menu-icon').wrappers
  t.is(menuIcon.length, 1)
})

test('TheHeaderMenuBtn.vue to have 3 childrens', (t) => {
  const elLength = wrapper.vm.$el.children.length
  t.is(elLength, 3)
})

test.afterEach(() => {
  wrapper = null
})
