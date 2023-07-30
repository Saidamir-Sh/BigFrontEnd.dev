// This is a React Quiz from BFE.dev

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function renderWithError() {
  throw new Error('error');
}

function A() {
  return <ErrorBoundary name="boundary-2">{renderWithError()}</ErrorBoundary>;
}

function App() {
  return (
    <ErrorBoundary name="boundary-1">
      <A />
    </ErrorBoundary>
  )
}


class ErrorBoundary extends Component<
  { name: string; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log(this.props.name);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

// Answer:
// "boundary-1"

// Explanation:
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error here or perform additional error handling
    console.error('Error boundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI to display when an error occurs
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
