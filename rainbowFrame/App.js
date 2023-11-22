import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/rainbowFrame';

let colorsArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple']; 

ReactDOM.render(
  <RainbowFrame colors={colorsArr}>
      Hello!
    </RainbowFrame>
  , document.getElementById('container') 
);
