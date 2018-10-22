import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Link from '../../components/link'

test('Link renders correctly', async () => {
  const tree = await renderer.create(<Link />).toJSON()

  expect(tree).toMatchSnapshot()
})