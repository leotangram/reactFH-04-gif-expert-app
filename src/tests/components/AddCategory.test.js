import React from 'react'
import AddCategory from '../../components/AddCategory'
import { shallow } from 'enzyme'

describe('AddCategory', () => {
  const setCategories = jest.fn()
  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the text field', () => {
    const input = wrapper.find('input')
    const value = ''
    input.simulate('change', { target: { value } })
    console.log('Holi', input)
    expect(input.props().value).toBe(value)
  })

  test('should not call the information with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('should call setCategories and clean text field', () => {
    const value = 'Hola mundo'
    wrapper.find('input').simulate('change', { target: { value } })
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(setCategories).toHaveBeenCalled()
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
