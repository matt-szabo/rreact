import React, { Component } from 'react';
import './ProfileFilter.css';


class ProfileFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {fill: ''};

    this.handleChangeFill = this.handleChangeFill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChangeFill(event) {
    this.setState({fill: event.target.value});
  }



  handleSubmit(event) {
    alert("Let's filter for " + this.state.fill);
    this.props.onFilter(this.state.fill);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter with this text:
          <input type="text" value={this.state.fill} onChange={this.handleChangeFill} />
        </label>
        <input type="submit" value="Filter" />
      </form>
    );
  }
}




export default ProfileFilter;