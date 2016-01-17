import React from 'react';
import SpaceForecast from '../components/SpaceForecast';

const RandomDataContainer = React.createClass({
  getInitialState() {
    return {
      weatherdata: this._getRandomWeatherData()
    };
  },
  componentDidMount() {
    this.interval = setInterval(this._updateWeatherData, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  _updateWeatherData() {
    this.setState({
      weatherdata: this._getRandomWeatherData()
    });
  },
  _getRandomWeatherData() {
    return {
      title: 'Random Space Weather',
      planets: [
        {
          name: 'Mercury',
          temperature: 440 + Math.floor(Math.random() * 10)
        },
        {
          name: 'Venus',
          temperature: 737  + Math.floor(Math.random() * 10)
        },
        {
          name: 'Earth',
          temperature: 288 + Math.floor(Math.random() * 10)
        },
        {
          name: 'Mars',
          temperature: 210 + Math.floor(Math.random() * 10)
        }
      ]
    };
  },
  render() {
    return (
      <div>
        <SpaceForecast data={this.state.weatherdata}/>
      </div>
    );
  }
});

export default RandomDataContainer;
