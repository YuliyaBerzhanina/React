import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import ShopName from './ShopName';
import Toy from './Toy';

class CardEdit extends React.Component {

  state = {
    text: this.props.selectedToy.text,
    count: this.props.selectedToy.count,
    price: this.props.selectedToy.price,
  }
  
  textChanged = eo => {
    this.setState({text: eo.target.value});
  }
  countChanged = eo => {
    this.setState({count: eo.target.value});
  }
  priceChanged = eo => {
    this.setState({price: eo.target.value});
  }

  render() {
    <div>
    <input type="text" value={this.state.text} onChange={this.textChanged}></input>
    <input type="number" value={this.state.count} onChange={this.countChanged}></input>
    <input type="number" value={this.state.price} onChange={this.priceChanged}></input>
    </div>
  }

}


class Ishop extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    toys: PropTypes.array,
};

  state = {
    toys: this.props.toys,
    selectedToyCode: null,
    mode: 1,     //1 none, 2 show, 3 edit
   }

   selectedToy = toyCode => {
    this.setState( {selectedToyCode:toyCode})
   };

   deleteToy = toyCode => {
    const newToys=this.state.toys.filter(toys => toys.code!==toyCode );
    this.setState( {toys:newToys})
   };

   editToy = toyCode => {
    this.setState( {selectedToyCode:toyCode});
    this.setState({mode: 3});
   };

  render() {
    const toysCode=this.state.toys.map( t =>
      <Toy
        key={t.code} text={t.text} count={t.count} price={t.price} photo={t.photo} title={t.title}
        checked={t.checked} code={t.code} 
       selectedToyCode={this.state.selectedToyCode}
       cbSelected={this.selectedToy}
       cbDelete={this.deleteToy}
       cbEdit={this.editToy} />
    );

    const selectedToy=this.state.toys.find( t => t.code===this.state.selectedToyCode);

    return (
      <div className='Ishop'>
         <ShopName name={this.props.name}/>
        <div className='Toy'> {toysCode} </div><br></br>
      
        <div className='Card'>
        {(this.state.mode===2)&&<CardView toy={selectedToy} /> }
        {(this.state.mode===3)&&<CardEdit toy={selectedToy} />}
          </div>
      </div>
     
    );
  }
}

export default Ishop;

