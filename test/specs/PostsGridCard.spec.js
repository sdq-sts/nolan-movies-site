import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import PostsGridCard from '../../components/Home/PostsGridCard'

let wrapper

const propsData = {
  post: { title: 'Inception', year: '2017', thumb: '/path/to/image.jpg' }
}

test.beforeEach(() => {
  wrapper = shallowMount(PostsGridCard, { propsData })
})

test('to show card container', (t) => {
  const cardContainer = wrapper.findAll('.grid-card').wrappers
  t.is(cardContainer.length, 1)
})

test('to show card thumbnail', (t) => {
  const cardThumb = wrapper.findAll('.grid-card__thumb > img').wrappers
  t.is(cardThumb.length, 1)
})

test('to have correct thumbnail url', (t) => {
  const cardThumb = wrapper.find('.grid-card__thumb > img').element
  t.is(cardThumb.src, propsData.post.thumb)
})

test('to show card metadata', (t) => {
  const cardMeta = wrapper.findAll('.grid-card__meta').wrappers
  t.is(cardMeta.length, 1)
})

test('to show correct meta title', (t) => {
  const cardMetaTitle = wrapper.find('.meta > .meta__title')
  t.is(cardMetaTitle.text(), propsData.post.title)
})

test('to show correct meta year', (t) => {
  const cardMetaYear = wrapper.find('.meta > .meta__year')
  t.is(cardMetaYear.text(), propsData.post.year)
})
