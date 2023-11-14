import React from 'react';
import PropTypes from 'prop-types';

import './Toy.css';

class Toy extends React.Component {

  static propTypes = {
    code: PropTypes.number,
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,   
};
      
      clicked = eo => {
            this.props.cbSelected(this.props.code);
         
      };

      delete = eo => {
        eo.stopPropagation();
        this.props.cbDelete(this.props.code);
              };

   render() {
    return (
          <table className='IshopToy' style={{background:(this.props.selectedToyCode===this.props.code)?"greenyellow":"beige"}}
           onClick={this.clicked}>
        <tbody >
            <tr >
              <td className='Text'>{this.props.text}</td>
              <td className='Count'>{this.props.count}</td>
              <td className='Photo'><img src={this.props.photo}></img></td>
              <td className='Price'>{this.props.price+"$"}</td>
              <td><input className='Delete' type="button" value="delete" onClick={this.delete}></input></td>
             </tr>   
            </tbody>    
          </table>
        );
      }

}
export default Toy;
