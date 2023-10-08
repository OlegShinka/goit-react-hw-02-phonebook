import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Btn, Cont, FormSt, Inp } from './form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;

    this.setState({
      [inputName]: [inputValue],
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      ...this.state,
    };
    this.props.onSubmitForm(newContact);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div>
        <Cont>
          <FormSt onSubmit={this.handleSubmit}>
            <label>Name</label>
            <Inp
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
              required
            />
            <label htmlFor="tel">Number</label>
            <Inp
              type="tel"
              value={this.state.number}
              name="number"
              onChange={this.handleChange}
              pattern="[a-zA-Z0-9]+"
              required
            />
            <Btn type="submit">Add contact</Btn>
          </FormSt>
        </Cont>
      </div>
    );
  }
}

export default Form;
