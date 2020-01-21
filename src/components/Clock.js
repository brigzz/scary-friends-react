import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWilUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div className='clock'>
                <h2 style={{padding: 0, margin: 0}}>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;