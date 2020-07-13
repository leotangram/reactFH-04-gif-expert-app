import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('GifGridItem Component', () => {
  test('should show the component correctly', () => {
    const title = 'Title'
    const url = 'https://asdasd.asd.asd'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    expect(wrapper).toMatchSnapshot()
  })
})
