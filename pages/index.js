import React from 'react';
import Home from './home'
import Fonts from './fonts';

class Index extends React.Component {
  componentDidMount () {
    Fonts()
  }

  render () {
    return <Home />
  }
}

export default Index;
