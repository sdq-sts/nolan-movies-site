import test from 'ava'
import { mount } from '@vue/test-utils'
import PostsGrid from '../../components/Home/PostsGrid'

let wrapper

const propsData = {
  posts: [
    { title: 'Inception', year: '2017', thumb: '/path/to/image.jpg' },
    { title: 'Batman', year: '2008', thumb:'/path/to/image.jpg' },
    { title: 'Interstellar', year: '2011', thumb: '/path/to/image.jpg' },
    { title: 'Memento', year: '2004', thumb: '/path/to/image.jpg' },
    { title: 'Dunkirk', year: '2017', thumb: '/path/to/image.jpg' }
  ]
}

test.beforeEach(() => {
  wrapper = mount(PostsGrid, { propsData })
})

test('to show grid container', (t) => {
  const gridContainer = wrapper.findAll('.posts-grid').wrappers
  t.is(gridContainer.length, 1)
})

test('to show posts cards', (t) => {
  const postCards = wrapper.findAll('.posts-grid__card').wrappers
  t.is(postCards.length, propsData.posts.length)
})
