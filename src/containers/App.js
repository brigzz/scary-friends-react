import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Clock from '../components/Clock';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
    console.log('constructor');
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(`response = ${response.status}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const jsonRobots = await response.json();
      this.setState({ robots: jsonRobots });
    } catch (error) {
      console.log(error);
    }
    console.log('componentDidMount');
  }

  onSearchChange = evt => {
    this.setState({ searchField: evt.target.value });
    console.log('onSearchChange');
  };

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log('render');
    console.log(`Search for: ${searchField}`);

    if (robots.length === 0) {
      return (
        <h1 className="tc" style={{ color: 'yellow', margin: '0 auto' }}>
          Loading...
        </h1>
      );
    } else {
      return (
        <div>
          <Clock />
          <h1 className="tc" style={{ margin: '10px' }}>
            Scary Friends
          </h1>
          <SearchBox searchChange={this.onSearchChange} />

          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
