import React, {Component} from 'react';
import SpaceForecast from '../components/SpaceForecast';
import xhr from 'superagent';

const ApiDataContainer = React.createClass({
  getInitialState() {
    return {
      weather_data: {
        title: 'Loading',
        planets: []
      }
    };
  },
  componentDidMount() {
    this._updateWeatherDataFromServer();
  },
  _updateWeatherDataFromServer() {
    var self = this;
    xhr.get('/api/spaceweather').end(function(err, res) {
      if(err) {
        //console.log(err);
      } else {
        self.setState({
          weather_data: res.body
        });
      }
    });
  },
  render() {
    return (
      <div>
        <SpaceForecast data={this.state.weather_data}/>
        <button onClick={this._updateWeatherDataFromServer}>Update</button>
      </div>
    );
  }
});

export default ApiDataContainer;
