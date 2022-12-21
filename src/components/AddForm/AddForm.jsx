import React, { Component } from 'react';

export class AddForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addContact = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              value={name}
              onChange={this.inputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Phone Number
            <input
              value={number}
              onChange={this.inputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}
