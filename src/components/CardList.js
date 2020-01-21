import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
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
