import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import RelatedMovies from '../../components/Pages/RelatedMovies'

let wrapper

const propsData = {
  movies: [
    { title: 'Batman', thumb: '/path/to/thum-1.jpg' },
    { title: 'Memento', thumb: '/path/to/thumb-2.jpg' },
    { title: 'Inception', thumb: '/path/to/thumb-3.jpg' },
  ]
}

test.beforeEach(() => {
  wrapper = shallowMount(RelatedMovies, { propsData })
})

test('to show related-movies container', (t) => {
  const relatedMoviesContainer = wrapper.findAll('.related-movies').wrappers
  t.is(relatedMoviesContainer.length, 1)
})

test('to show related-movies title', (t) => {
  const relatedMoviesTitle = wrapper.findAll('.related-movies__title').wrappers
  t.is(relatedMoviesTitle.length, 1)
})

test('to show related-movies cards', (t) => {
  const relatedMoviesCard = wrapper.findAll('.related-movies__movie').wrappers
  const currentShowingMovies = propsData.movies.length
  t.is(relatedMoviesCard.length, currentShowingMovies)
})
