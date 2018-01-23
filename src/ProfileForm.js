import React, { Component } from 'react';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '', desc : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({id: event.target.value});
  }

   handleChange2(event) {
    this.setState({name: event.target.value});
  }

   handleChange3(event) {
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    alert('An entry was submitted: ' + this.state.name);
      this.props.onSubmit(this.state.id,this.state.name,this.state.desc);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          id:
          <input type="text" value={this.state.id} onChange={this.handleChange} />
          </label>
          <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange2} />
          </label>
          <label>
          desc:
          <input type="text" value={this.state.desc} onChange={this.handleChange3} />
          </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}




export default ProfileForm;