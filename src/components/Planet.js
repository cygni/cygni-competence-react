import React from 'react';

const Planet = React.createClass({
  displayName: 'Planet',
  propTypes: {
    name: React.PropTypes.string.isRequired,
    temperature: React.PropTypes.number
  },
  getInitialState() {
    return {
      trend: ''
    };
  },
  componentWillReceiveProps(newProps) {
    const currentTemp = this.props.temperature;
    const newTemp = newProps.temperature;
    var trend = '';
    if (newTemp > currentTemp) {
      trend = '+';
    } else if (newTemp < currentTemp) {
      trend = '-';
    }
    this.setState({
      trend: trend
    });
  },
  render() {
    return (
      <div className="planet">
        <span className="planet__data planet__data--name">{this.props.name}</span>
        <span className="planet__data planet__data--temp">{this.props.temperature}K</span>
        <span className="planet__data planet__data--trend">{this.state.trend}</span>
      </div>
    );
  }
});

//const Planet = React.createClass({
//  displayName: 'Planet',
//  propTypes: {
//    name: React.PropTypes.string.isRequired,
//    temperature: React.PropTypes.number
//  },
//  render() {
//    return (
//      <div className="planet">
//        <span className="planet__data planet__data--name">{this.props.name}</span>
//        <span className="planet__data planet__data--temp">{this.props.temperature}K</span>
//      </div>
//    );
//  }
//});

export default Planet;
