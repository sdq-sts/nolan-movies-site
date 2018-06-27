import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import TheSocialIcons from '../../components/Base/TheSocialIcons'

let wrapper

const propsData = {
  description: 'Some site description',
  facebook: 'http://facebook.com/profile.php?=73322363',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/',
  pinterest: 'https://www.pinterest.com',
  email: 'hello@email.com.br'
}

test.beforeEach(() => {
  wrapper = shallowMount(TheSocialIcons, { propsData })
})

test('to display social-icons container', (t) => {
  const socialIconsContainer = wrapper.findAll('.social-icons').wrappers
  t.is(socialIconsContainer.length, 1)
})

test('to display social-icons links', (t) => {
  const socialIconsLinks = wrapper.findAll('.social-icons__links').wrappers
  t.is(socialIconsLinks.length, 1)
})

test('to display the social-icons description', (t) => {
  const socialIconsDescription = wrapper.findAll('.social-icons__description')

  t.is(socialIconsDescription.length, 1)
})


