import React, { Component } from 'react';


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
    this.props.onFilter(this.state.fill);

    event.preventDefault();
  }

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <p>
          Filter with this text:
        </p>
          <input type="text" value={this.state.fill} onChange={this.handleChangeFill} />
      <p>
        <input type="submit" value="Filter" />
      </p>
      </form>
        </div>
    );
  }
}




export default ProfileFilter;