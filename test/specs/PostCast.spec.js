import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import PostsCast from '../../components/Pages/PostCast'

let wrapper

const propsData = {
  castList: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano', 'Mark Boone Junior', 'Russ Fega', 'Jorja Fox']
}

test.beforeEach(() => {
  wrapper = shallowMount(PostsCast, { propsData })
})

test('to show post-cast container', (t) => {
  const postCastContainer = wrapper.findAll('.post-cast').wrappers
  t.is(postCastContainer.length, 1)
})

test('to show post-cast title', (t) => {
  const postCastTitle = wrapper.findAll('.post-cast__title > p').wrappers
  t.is(postCastTitle.length, 1)
})

test('to show post-cast actors list', (t) => {
  const postCastList = wrapper.findAll('.post-cast__actors').wrappers
  const listItems = wrapper.findAll('.actors-list__item')

  t.is(postCastList.length, 1)
  t.is(listItems.length, propsData.castList.length)
})
