import test from 'ava'
import { mount } from '@vue/test-utils'
import TheHeader from '../../components/Base/TheHeader'

let wrapper

const propsData = {
  title: ['The', 'Dream is', 'Real.'],
  subtitle: ['The', 'Dream is', 'Real.']
}

test.beforeEach(() => {
  wrapper = mount(TheHeader, { propsData })
})

test('TheHeader.vue snapshot', (t) => {
  t.snapshot({ html: wrapper.html() })
})

test('TheHeader.vue to display .header .header__title', (t) => {
  // const $items = wrapper.findAll('li').wrappers

  // $items.forEach(($item, index) => {
  //   t.is($item.text(), list[index])
  // })

  const headerTitle = wrapper.findAll('.header .header__title').wrappers
 
  t.is(headerTitle.length, 1)
  t.is(headerTitle[0].text(), propsData.title.join(''))
})
