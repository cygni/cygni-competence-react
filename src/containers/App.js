import React, {Component} from 'react';
import HardCoded from './HardCoded';
import RandomData from './RandomData';
import ApiData from './ApiData';

export default class App extends Component {
  render() {
    return (
      <div>
        <HardCoded/>
        <RandomData/>
        <ApiData/>
      </div>
    );
  }
}
