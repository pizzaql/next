import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Container from '../../components/container'

test('Container renders correctly', async () => {
  const tree = await renderer.create(<Container />).toJSON()

  expect(tree).toMatchSnapshot()
})