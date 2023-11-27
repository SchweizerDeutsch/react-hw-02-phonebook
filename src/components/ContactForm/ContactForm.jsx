import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  isContactExist = name => {
    const { contacts } = this.props;
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;