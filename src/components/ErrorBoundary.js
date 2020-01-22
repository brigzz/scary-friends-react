import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
      console.log('componentDidCatch()');
      this.setState({ hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          {console.log('something went wrong')}
          <h1 className='tc'>Opps! Something went wrong...</h1>;
        </div>
      );
    } else {
        console.log('hasError is false. Rendering Children')
      return (
        this.props.children
      )
    }
  }
}

export default ErrorBoundary;
