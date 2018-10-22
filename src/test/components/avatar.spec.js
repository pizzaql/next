import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Avatar from '../../components/avatar'

test('Avatar renders correctly', async () => {
  const tree = await renderer.create(<Avatar />).toJSON()

  expect(tree).toMatchSnapshot()
})