import React from 'react';
import PropTypes from 'prop-types';

import './rainbowFrame.css';


class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array,
};

  render() {
    let code=this.props.children;
      this.props.colors.forEach( color => {
        code= <div className='RainbowFrame' style={{border: "solid 3px "+color}}>{code}</div>
      }) 
    return (code);
  }
}

export default RainbowFrame;
