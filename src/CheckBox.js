import React, { Component } from 'react';


class CheckBox extends Component{

constructor(props) {
    super(props);


this.handleSelect = this.handleSelect.bind(this);

}


 handleSelect(){
 	this.props.onSelect(this.props.index);
 }

  render() {
    return (
    	<div className="chk">
    		<input type="checkbox" onChange={this.handleSelect}/>
    	</div>
    )
  }
};

export default CheckBox;