import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      addressline: "",
      city: "",
      country: "",
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, addressline, city, country } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        ></input>

        <label htmlFor="addressline">Address Line</label>
        <input
          type="text"
          name="addressline"
          id="addressline"
          value={addressline}
          onChange={this.handleChange}
        ></input>

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={this.handleChange}
        ></input>

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={this.handleChange}
        ></input>

        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
