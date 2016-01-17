import React from 'react';
import {render} from 'react-dom';

import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

render(
  <div>Hej</div>, document.getElementById('app')
);
