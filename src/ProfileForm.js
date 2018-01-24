import React, { Component } from 'react';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', address : '', prov: '', postalCode: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeID(event) {
    this.setState({id: event.target.value});
  }

  handleChange(event) {
    this.setState({firstName: event.target.value});
  }

   handleChange2(event) {
    this.setState({lastName: event.target.value});
  }

   handleChange3(event) {
    this.setState({address: event.target.value});
  }

  handleChange4(event) {
    this.setState({prov: event.target.value});
  }

  handleChange5(event) {
    this.setState({postalCode: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.firstName + '\'s address was submitted.');
      this.props.onSubmit(this.state.firstName,this.state.lastName,this.state.address,this.state.prov,this.state.postalCode);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>
          Last Name:
          <input type="text" value={this.state.lastName} onChange={this.handleChange2} />
          </label>
          <label>
          Address:
          <input type="text" value={this.state.address} onChange={this.handleChange3} />
          </label>
        <label>
          Province:
          <input type="text" value={this.state.prov} onChange={this.handleChange4} />
        </label>
        <label>
          Postal Code:
          <input type="text" value={this.state.postalCode} onChange={this.handleChange5} />
        </label>
        <label>
          <input type="hidden" value={Math.floor((Math.random() * 100000) + 1)} onChange={this.handleChangeID} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}




export default ProfileForm;