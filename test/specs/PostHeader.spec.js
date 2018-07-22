import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import PostsHeader from '../../components/Pages/PostHeader'

let wrapper

const propsData = {
  title: 'A Origem',
  originalTitle: 'Inception',
  year: 2011,
  image: '/path/to/image.jpg'
}

test.beforeEach(() => {
  wrapper = shallowMount(PostsHeader, { propsData })
})

test('to show post-header container', (t) => {
  const postHeaderContainer = wrapper.findAll('.post-header').wrappers
  t.is(postHeaderContainer.length, 1)
})

test('to have a title', (t) => {
  const postHeaderContainer = wrapper.findAll('.post-main__title').wrappers
  t.is(postHeaderContainer.length, 1)
})

test('to have a image', (t) => {
  const postHeaderContainer = wrapper.findAll('.post-main__image').wrappers
  t.is(postHeaderContainer.length, 1)
})

test('to have meta info', (t) => {
  const postHeaderContainer = wrapper.findAll('.post-header__meta').wrappers
  t.is(postHeaderContainer.length, 1)
})

