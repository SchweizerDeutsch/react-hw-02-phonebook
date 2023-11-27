import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isContactExist = name => {
    const { contacts } = this.state;
    return contacts.some(contact => contact.name === name);
  };

  addContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    if (this.isContactExist(normalizedName)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: normalizedName,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.handleFilterChange} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
