import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import AuthorBio from '../../components/Home/AuthorBio'

let wrapper

const propsData = {
  authorName: 'Nolan',
  images: [
    '/path/to/img1.jpg',
    '/path/to/img2.jpg',
    '/path/to/img3.jpg',
    '/path/to/img4.jpg'
  ],
  bio: 'author bio'
}

test.beforeEach(() => {
  wrapper = shallowMount(AuthorBio, { propsData })
})

test('to show bio container', (t) => {
  const bioContainer = wrapper.findAll('.author-bio').wrappers
  t.is(bioContainer.length, 1)
})

test('to show author name', (t) => {
  const titleElm = wrapper.findAll('.author-bio > .author-bio__title').wrappers
  t.is(titleElm.length, 1)
})

test('to show bio details', (t) => {
  const galleryElm = wrapper.findAll('.author-bio > .author-bio__details').wrappers
  t.is(galleryElm.length, 1)
})

test('to show bio gallery', (t) => {
  const galleryElm = wrapper.findAll('.details > .details__gallery').wrappers
  t.is(galleryElm.length, 1)
})

test('to show bio text', (t) => {
  const textElm = wrapper.findAll('.details > .details__text').wrappers
  t.is(textElm.length, 1)
})
