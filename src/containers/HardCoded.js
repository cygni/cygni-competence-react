import React from 'react';
import SpaceForecast from '../components/SpaceForecast';

const weatherdata = {
  title: 'Space forecast',
  planets: [
    {
      name: 'Mercury',
      temperature: 440
    },
    {
      name: 'Venus',
      temperature: 737
    },
    {
      name: 'Earth',
      temperature: 288
    },
    {
      name: 'Mars',
      temperature: 210
    }
  ]
};

const HardCodedDataContainer = React.createClass({
  displayName: 'HardCodedDataContainer',
  render() {
    return (
      <SpaceForecast data={weatherdata}/>
    );
  }
});

export default HardCodedDataContainer;
