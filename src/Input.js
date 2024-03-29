import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
  }


 
  }

  render() {
    return (
          
          <input type="text" value={this.state.value} onChange={this.handleChange}  />
          
    );
  }
}




export default Input;