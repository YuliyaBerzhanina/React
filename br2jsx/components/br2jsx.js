import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';

class Br2jsx extends React.Component {

  static propTypes = {
    text: PropTypes.string,
};

  render() {
   let words=this.props.text.split(/<br *\/?>/);
   let jsxArr=[];
   for ( let i=0; i<words.length; i++) {
    jsxArr.push(words[i]);
    if (i<words.length-1) {
      jsxArr.push(<br key={i}/>);
    }
   }

    return <div className='br2jsx'>{jsxArr}</div>;
  }
}

export default Br2jsx;
