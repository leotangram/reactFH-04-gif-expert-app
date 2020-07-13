import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('GifGridItem Component', () => {
  const title = 'Title'
  const url = 'https://asdasd.asd.asd'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)
  test('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have a paragraph with the text', () => {
    const paragraph = wrapper.find('p')
    expect(paragraph.text().trim()).toBe(title)
  })

  test('should have a image, url and alt', () => {
    const image = wrapper.find('img')
    expect(image.prop('src')).toBe(url)
    expect(image.prop('alt')).toBe(title)
  })

  test('should have animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)
  })
})
