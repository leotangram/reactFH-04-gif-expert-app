import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('sueFetchGifs hook', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { data, loading } = result.current
    expect(data).toEqual([])
    expect(loading).toEqual(true)
  })
})
