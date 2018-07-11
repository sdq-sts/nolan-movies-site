import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import TheFooter from '../../components/Base/TheFooter'

let wrapper

const propsData = {
  toTopMsg: 'voltar para o topo',
  footerMsg: 'The dream is Real.'
}

const expectedFooterMsg = 'The dream is Real'

test.beforeEach(() => {
  wrapper = shallowMount(TheFooter, { propsData })
})

test('to show the footer container', (t) => {
  const theFooterContainer = wrapper.findAll('.site-footer').wrappers
  t.is(theFooterContainer.length, 1)
})

test('to show the footer to-top message', (t) => {
  const theFooterToTopMsg = wrapper.find('.to-top > .to-top__msg')
  t.is(theFooterToTopMsg.text(), propsData.toTopMsg)
})

test('to show the footer message', (t) => {
  const theFooterMsg = wrapper.find('.footer-msg > .footer-msg__text')
  t.is(theFooterMsg.text(), expectedFooterMsg)
})

test('to show the footer current year', (t) => {
  const theFooterYear = wrapper.find('.footer-msg > .footer-msg__year')
  const currentYear = String(new Date().getFullYear())

  t.is(theFooterYear.text(), currentYear)
})
