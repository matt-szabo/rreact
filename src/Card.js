import React, { Component } from 'react';


class Card extends Component{

constructor(props) {
    super(props);


this.handleChange = this.handleChange.bind(this);

}

handleChange(e) { 
    this.props.onClick(this.props.num);
  }



  render() {
    return (
    	<div>
	    	<button onClick={this.handleChange}>Delete Me</button>
	    	<div>{this.props.children}</div>
    	</div>
    )
  }
};

export default Card;