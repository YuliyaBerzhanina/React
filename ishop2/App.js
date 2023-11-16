import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

const nameText='Добро пожаловать в интернет-магазин ToysForYou';

import toysArr from './toys.json';

ReactDOM.render(
  <Ishop 
    name={nameText}
    toys={toysArr}
  
  />
  , document.getElementById('container') 
);
