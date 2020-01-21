import React, { Component } from 'react';
import Scroll from './Scroll';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Clock from './Clock';

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
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    console.log('render');
    console.log(`Search for: ${this.state.searchField}`);

    if (this.state.robots.length === 0) {
      return <h1 className='tc' style={{color: 'yellow'}}>Loading...</h1>;
    } else {
      return (
        <div>
          <Clock />
          <h1 className="tc">Scary Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />

          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
