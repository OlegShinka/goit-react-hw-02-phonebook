// export const Form = ({ name, number, onAddName, onAddNumber }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const { name, number } = evt.target.elements;
//     console.log(name, number);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={evt => onAddName(evt.target.value)}
//           required
//         />
//         <label htmlFor="tel">Number</label>
//         <input
//           type="tel"
//           value={number}
//           name="number"
//           onChange={evt => onAddNumber(evt.target.value)}
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     </div>
//   );
// };

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    console.log(evt.currentTarget.name);
    console.log(evt.currentTarget.value);
    this.setState({
      [evt.currentTarget.name]: [evt.currentTarget.value],
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    console.log(evt.currentTarget.elements.name);
    // this.props.onSubmitForm(this.state);
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
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="tel">Number</label>
          <input
            type="tel"
            value={this.state.number}
            name="number"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
