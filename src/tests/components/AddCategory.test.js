import React from 'react'
import AddCategory from '../../components/AddCategory'
import { shallow } from 'enzyme'

describe('AddCategory', () => {
  test('should show correctly', () => {
    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)
    expect(wrapper).toMatchSnapshot()
  })
})
