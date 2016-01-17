import React, { PropTypes } from 'react';
import Planet from './Planet';

const PlanetList = React.createClass({
  displayName: 'PlanetList',
  propTypes: {
    planets: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        temperature: PropTypes.number
      })
    )
  },
  render() {
    const planets = this.props.planets;
    return (
      <ul className="planets-list">
        {planets && planets.map((planet =>
            <li key={planet.name} className="planets-list__row">
              <Planet name={planet.name} temperature={planet.temperature}/>
            </li>
        ))}
      </ul>
    );
  }
});

export default PlanetList;
