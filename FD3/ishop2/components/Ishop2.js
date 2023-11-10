import React from 'react';

import './Ishop.css';

import ShopName from './ShopName';
import Toys from './Toys';

class Ishop extends React.Component {

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
      <Toys
        key={v.code} text={v.text} count={v.count} price={v.price} photo={v.photo} title={v.title}
        checked={v.checked} code={v.code} 
       selectedToyCode={this.state.selectedToyCode}
       cbSelected={this.selectedToy}
       cbDelete={this.deleteToy} />
    );

    return (
      <div className='Ishop'>
        <ShopName name={this.props.name}/>
        <div className='Toys'>{toysCode}</div>
      </div>
    );
  }
}

export default Ishop;
