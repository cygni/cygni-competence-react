import React from 'react';
import {render} from 'react-dom';
import HardCoded from './containers/HardCoded';
import App from './containers/App';

import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

render(
  <HardCoded/>, document.getElementById('app')
);
