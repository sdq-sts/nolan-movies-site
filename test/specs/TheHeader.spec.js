import test from 'ava'
import { mount } from '@vue/test-utils'
import TheHeader from '../../components/Base/TheHeader'

let wrapper


const propsData = {
  title: ['The', 'Dream is', 'Real.'],
  subtitle: ['The', 'Dream is not', 'Real.'],
  isLoading: false,
  isMenuOpen: false,
  menuItems: [
    { name: 'Biografia', link: 'https://www.imdb.com/name/nm0634240/bio?ref_=nm_ql_1' },
    { name: 'Filmografia', link: 'https://www.imdb.com/name/nm0634240/?nmdp=1&ref_=nm_ql_4#filmography'},
    { name: 'Galeria de imagens', link: 'https://www.imdb.com/name/nm0634240/mediaindex?ref_=nm_ql_3' },
    { name: 'Vídeos', link: 'https://www.imdb.com/name/nm0634240/videogallery?ref_=nm_ql_5' }
  ]
}

test.beforeEach(() => {
  wrapper = mount(TheHeader, { propsData })
})

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
