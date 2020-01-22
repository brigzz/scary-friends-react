import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {

    //For Testing componentDidCatch() in ErrorBoundary.js
    // if (true) {
    //   throw new Error('Errorrr.........');
    // }

    return (
      <div className="card-list">
        {this.props.robots.map(item => (
          <Card robot={item} key={item.id}/>
        ))}
      </div>
    );
  }
}

export default CardList;
