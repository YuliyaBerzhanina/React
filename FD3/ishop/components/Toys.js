import React from 'react';

import './Toys.css';

class Toys extends React.Component {
      
      clicked = eo => {
            this.props.cbSelected(this.props.code);
         
      };

      delete = eo => {
        eo.stopPropagation();
        this.props.cbDelete(this.props.code);
              };

   render() {
      if (this.props.title==true) {
        return (
          <table className='IshopToys' style={{background:"beige"}} >
        <tbody>
            <tr >
              <td className='Text'>{this.props.text}</td>
              <td className='Count'>{this.props.count}</td>
              <td className='Photo'><img src={this.props.photo}></img></td>
              <td className='Price'>{this.props.price}</td>
              <td></td>
              </tr>   
            </tbody>    
          </table>
        );

      }
      else {
        return (
          <table className='IshopToys' style={{background:(this.props.selectedToyCode===this.props.code)?"greenyellow":"beige"}}
           onClick={this.clicked}>
        <tbody >
            <tr >
              <td className='Text'>{this.props.text}</td>
              <td className='Count'>{this.props.count}</td>
              <td className='Photo'><img src={this.props.photo}></img></td>
              <td className='Price'>{this.props.price}</td>
              <td><input className='Delete' type="button" value="delete" onClick={this.delete}   ></input></td>
             </tr>   
            </tbody>    
          </table>
        );
      }

}
}
export default Toys;
