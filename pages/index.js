import React from 'react';
import * as Sentry from '@sentry/browser';
import Home from './home'
import Fonts from './fonts';

Sentry.init({
 dsn: "https://23879f5459854fe181c5a62327999d35@sentry.io/1326086"
});

class Index extends React.Component {
  componentDidMount () {
    Fonts()
  }

  constructor(props) {
    super(props);
    this.state = { error: null };
  }


  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render () {
    if (this.state.error) {
      return (
        <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
      );
    } else {
      return <Home />
    }
  }
}

export default Index;
