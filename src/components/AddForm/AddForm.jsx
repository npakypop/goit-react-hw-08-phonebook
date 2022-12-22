import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Title, Form, Input, Button, Label } from './AddForm.styled';

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

  addContactSubmit = event => {
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
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContactSubmit}>
          <Label>
            Name
            <Input
              value={name}
              onChange={this.inputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Phone Number
            <Input
              value={number}
              onChange={this.inputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add Contact</Button>
        </Form>
      </>
    );
  }
}

AddForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
