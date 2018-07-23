import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import PostsPlot from '../../components/Pages/PostPlot'

let wrapper

const propsData = {
  plot: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis enim justo. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Cras vitae enim fringilla, faucibus velit vel, ultricies libero. Suspendisse vitae volutpat mi. Quisque consequat, neque non laoreet maximus, nisl eros commodo purus, nec blandit tortor mi eget dolor. Aliquam erat volutpat. Etiam non nibh in lacus pretium luctus eu eu felis. Aliquam nec tincidunt ante, vel faucibus lectus. Aliquam fringilla arcu eu lorem condimentum bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros diam, scelerisque non ipsum quis, euismod vehicula neque. Pellentesque sit amet ex aliquam, pellentesque risus pharetra, mollis metus.

    Fusce a neque vel quam consequat volutpat. Integer interdum vitae leo ac porta. Aliquam erat tellus, ullamcorper in efficitur ut, condimentum in nibh. Nunc rutrum libero sapien, in egestas eros aliquet sit amet. Fusce eleifend id lectus vitae imperdiet. Cras elementum tempor feugiat. Proin sit amet convallis leo. Donec lacinia finibus tellus a vestibulum. Nunc a suscipit urna. Vivamus molestie felis non augue fringilla malesuada. Donec posuere non eros id tristique. In consequat suscipit tortor sit amet convallis.`,
  smallImageSrc: '/path/to/small-img.jpg',
  bigImageSrc: '/path/to/big-img.jpg',
  imdbLink: 'http://imdb.com/'
}

test.beforeEach(() => {
  wrapper = shallowMount(PostsPlot, { propsData })
})

test('to show post-plot container', (t) => {
  const postPlotContainer = wrapper.findAll('.post-plot').wrappers
  t.is(postPlotContainer.length, 1)
})

test('to show post-plot first section', (t) => {
  const postPlotFirstSection = wrapper.findAll('.post-plot__first-section').wrappers
  t.is(postPlotFirstSection.length, 1)
})

test('to show post-plot second section', (t) => {
  const postPlotSecondSection = wrapper.findAll('.post-plot__second-section').wrappers
  t.is(postPlotSecondSection.length, 1)
})

test('to show post-plot big image', (t) => {
  const postPlotBigImg = wrapper.findAll('.post-plot__big-img').wrappers
  t.is(postPlotBigImg.length, 1)
})

test('to show post-plot imdb link', (t) => {
  const postPlotImdbLinkContainer = wrapper.findAll('.post-plot__imdb').wrappers
  const postPlotImdbLink = wrapper.find('.imdb > .imdb__link').element

  t.is(postPlotImdbLinkContainer.length, 1)
  t.is(postPlotImdbLink.href, propsData.imdbLink)
})
