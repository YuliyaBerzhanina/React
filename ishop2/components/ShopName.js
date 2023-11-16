import React from 'react';
import PropTypes from 'prop-types';

import './ShopName.css';

class ShopName extends React.Component {

    static propTypes = {
      name: PropTypes.string.isRequired,
  };
    
  render() {
       
    return <div className='ShopName'>{this.props.name}<br></br>
     <table style={{background:"beige"}} >
       <tbody>
           <tr >
             <td className='Text'>{"наименование"}</td>
             <td className='Count'>{"количество"}</td>
             <td className='Photo'>{"фото"}</td>
             <td className='Price'>{"цена"}</td>
             <td></td>
             </tr>   
           </tbody>    
         </table>
    </div>;
  }

}

export default ShopName;
