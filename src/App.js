import React, { Component } from 'react';
import { robots } from './robots';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots
    };
  }
  render() {
    let list = this.state.robots.map((item) => <Card robot={item} key={item.id} />);
    // console.log(list);
    return (
    <div>
        {/* {console.log(list)} */}
        {list}
    </div>
    );
  }
}

export default App;
