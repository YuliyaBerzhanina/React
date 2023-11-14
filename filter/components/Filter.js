import React from 'react';

import './Filter.css';

class Filter extends React.Component {

  state = {
    isSorted: false,
    filterStr: "",
    words: this.props.words,
   }

   sortChanged = eo => {
    this.setState( {isSorted:eo.target.checked}, this.transformText);
   };

   filterChanged = eo => {
    this.setState( {filterStr:eo.target.value}, this.transformText);
   };

   reset = eo => {
    this.setState( {isSorted: false, filterStr: "", words: this.props.words});
   };

   transformText = () => {
    let words=this.props.words.slice();
    if (this.state.filterStr) {
      words=words.filter(w => w.includes(this.state.filterStr));
    }
    if (this.state.isSorted) {
      words.sort();
    }
    this.setState({words});
   }


  render() {

    return (
      <div >
      <input type="checkbox" checked={this.state.isSorted} onChange={this.sortChanged}></input>
      <input type="text" value={this.state.filterStr} onChange={this.filterChanged}></input>
      <input type="button" value="сброс" onClick={this.reset}></input><br></br>
      <textarea className='Filter' value={this.state.words.join("\n")} readOnly/>

      </div>
      
    );
  }
}

export default Filter;
