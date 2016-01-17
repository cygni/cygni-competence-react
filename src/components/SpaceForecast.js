import React from 'react';
import PlanetList from './PlanetList';
import FatBorderWrapper from './FatBorderWrapper';

const SpaceForecast = React.createClass({
  displayName: 'SpaceForecast',
  propTypes: {
    data: React.PropTypes.shape({
      title: React.PropTypes.string,
      planets: React.PropTypes.array
    })
  },
  render() {
    const { title, planets } = this.props.data;
    return (
      <FatBorderWrapper>
        <h1 className="title">{title}</h1>
        <PlanetList planets={planets}/>
      </FatBorderWrapper>
    );
  }
});

export default SpaceForecast;
