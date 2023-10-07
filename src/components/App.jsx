import React, { Component } from 'react';
import { ContactsList } from './contactsList/contactsList';
import Form from './form/form';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  // addName = newName =>
  //   this.setState({
  //     name: newName,
  //   });
  // addNumber = newNumber =>
  //   this.setState({
  //     number: newNumber,
  //   });
  formSubmitHandler = newContact => {
    console.log(newContact);
    console.log(newContact.name);
    //this.setState({ contacts: data.name });
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };
  render() {
    // const { name, number } = this.state;
    return (
      <div>
        <h2> Phonebook</h2>
        <Form
          // name={name}
          // number={number}
          // onAddName={this.addName}
          // onAddNumber={this.addNumber}
          onSubmitForm={this.formSubmitHandler}
        />
        <ContactsList list={this.state.contacts} />
      </div>
    );
  }
}

export default App;
