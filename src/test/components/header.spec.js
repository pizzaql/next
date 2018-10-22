import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Header from '../../components/header'

test('Header renders correctly', async () => {
  const tree = await renderer.create(<Header />).toJSON()

  expect(tree).toMatchSnapshot()
})