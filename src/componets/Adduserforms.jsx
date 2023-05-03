import React, { Component } from 'react'

class Adduserforms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      gen: ''
    };
s
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, gen } = this.state;
    const newUser = { name, email, gen };
    this.props.addUser(newUser);
    this.setState({ name: '', email: '', gen: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Gen:
          <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 export default Adduserforms