const { valueFilter, valueFilterWith } = require('../dist')

const obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  A: 1,
  B: 2,
  C: 3,
  x: false,
  y: 0,
  z: null,
}

describe('valueFilter', () => {
  test('filter falsy', () => {
    expect(valueFilter(obj)).not.toHaveProperty('x', 'y', 'z')
  })

  test('filter string', () => {
    expect(valueFilter(obj, 'a')).not.toHaveProperty('a')
  })

  test('filter number', () => {
    expect(valueFilter(obj, 1)).not.toHaveProperty('A')
  })

  test('filter null', () => {
    expect(valueFilter(obj, null)).not.toHaveProperty('z')
  })

  test('filter with array', () => {
    expect(valueFilter(obj, ['a', 1, false])).not.toHaveProperty('a', 'A', 'x')
  })
})

describe('valueFilterWith', () => {
  test('filter all numbers', () => {
    expect(
      valueFilterWith(obj, (value) => typeof value === 'number')
    ).toHaveProperty('A', 'B', 'C', 'y')
  })
})
