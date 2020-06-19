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
    const { name, addressline, city, country } = event.target;

  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {

    const { name, addressline, city, country } = this.state;
    return(
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name}></input>

        <label htmlFor="addressline">Address Line</label>
        <input type="text" name="adddressline" id="addressline" value={addressline}></input>

        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" value={city}></input>

        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" value={country}></input>

      </form>
    )
  }
}

export default Form;
