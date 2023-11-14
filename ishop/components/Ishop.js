import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import ShopName from './ShopName';
import Toy from './Toy';

class Ishop extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    toys: PropTypes.array,
};

  state = {
    toys: this.props.toys,
    selectedToyCode: null,
   }

   selectedToy = toyCode => {
    this.setState( {selectedToyCode:toyCode})
   };

   deleteToy = toyCode => {
    const newToys=this.state.toys.filter(toys => toys.code!==toyCode );
    this.setState( {toys:newToys})
   };

  render() {
    const toysCode=this.state.toys.map( v =>
      <Toy
        key={v.code} text={v.text} count={v.count} price={v.price} photo={v.photo} title={v.title}
        checked={v.checked} code={v.code} 
       selectedToyCode={this.state.selectedToyCode}
       cbSelected={this.selectedToy}
       cbDelete={this.deleteToy} />
    );

    return (
      <div className='Ishop'>
        <ShopName name={this.props.name}/>
        <div className='Toy'>{toysCode}</div><br></br>
       
      </div>
     
    );
  }
}

export default Ishop;
