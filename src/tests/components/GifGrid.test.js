import React from 'react'
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('GifGrid Component', () => {
  const category = 'One Punch'
  test('should show correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show items when images is loaded useFetchGif', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'hhtps://local.com',
        title: 'Potato'
      },
      {
        id: '123',
        url: 'hhtps://local.com',
        title: 'Potato'
      }
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
