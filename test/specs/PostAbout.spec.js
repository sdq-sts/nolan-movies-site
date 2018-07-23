import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import PostsAbout from '../../components/Pages/PostAbout'

let wrapper

const propsData = {
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis enim justo. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Cras vitae enim fringilla, faucibus velit vel, ultricies libero.

  Suspendisse vitae volutpat mi. Quisque consequat, neque non laoreet maximus, nisl eros commodo purus, nec blandit tortor mi eget dolor. `,
  firstImage: '/path/to/firstImage.jpg',
  secondImage: '/path/to/firstImage.jpg'
}

test.beforeEach(() => {
  wrapper = shallowMount(PostsAbout, { propsData })
})

test('to show about-movie container', (t) => {
  const postAboutContainer = wrapper.findAll('.about-movie').wrappers
  t.is(postAboutContainer.length, 1)
})

test('to show about-movie text container', (t) => {
  const postAboutTextContainer = wrapper.findAll('.about-text').wrappers
  t.is(postAboutTextContainer.length, 1)
})

test('to show about-movie imgs container', (t) => {
  const postAboutContainer = wrapper.findAll('.about-imgs').wrappers
  t.is(postAboutContainer.length, 1)
})
