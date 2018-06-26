import test from 'ava'
import { mount } from '@vue/test-utils'
import TheHeader from '../../components/Base/TheHeader'

let wrapper

const propsData = {
  title: ['The', 'Dream is', 'Real.'],
  subtitle: ['The', 'Dream is not', 'Real.']
}

test.beforeEach(() => {
  wrapper = mount(TheHeader, { propsData })
})

// test('TheHeader.vue snapshot', (t) => {
//   t.snapshot({ html: wrapper.html() })
// })

test('TheHeader.vue to display the title', (t) => {
  const headerTitle = wrapper.findAll('.header .header__title').wrappers
 
  t.is(headerTitle.length, 1)
  t.is(headerTitle[0].text(), propsData.title.join(''))
})

test('TheHeader.vue to display the subtitle', (t) => {
  const headerSubtitle = wrapper.findAll('.site-header .site-header__subtitle').wrappers

  t.is(headerSubtitle.length, 1)
  t.is(headerSubtitle[0].text(), propsData.subtitle.join(''))
})
