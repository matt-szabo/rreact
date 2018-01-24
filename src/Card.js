import React, { Component } from 'react';
import './Card.css';



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
    	<div className="card">
	    	<div className="c1">{this.props.children}</div>
        <div className="b1">
        <button onClick={this.handleChange}>Delete Me</button>
        </div>
    	</div>
    )
  }
};

export default Card;