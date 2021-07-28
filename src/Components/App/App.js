import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";

import Form from "../Form";
import Filter from "../Filter";
import ContactsList from "../ContactsList";

// console.log(storage);
class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("data"));

    if (storage) {
      this.setState({ contacts: storage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const currentContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (currentContacts !== prevContacts) {
      localStorage.setItem("data", JSON.stringify(currentContacts));
    }
  }

  AddContact = (newContact) => {
    console.log(newContact);
    const inContact = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (inContact) {
      alert(`${inContact.name}  is already in contacts!`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [{ ...newContact }, ...prevState.contacts],
    }));
  };

  ChangeFilter = (e) => {
    // console.log(e);

    this.setState({ filter: e.target.value });
  };

  removeContact = (dataId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== dataId),
      };
    });
  };

  render() {
    // console.log(`render`);
    const filterContact = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <h2>Phonebook</h2>
        <Form onAddContacts={this.AddContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} changeFilter={this.ChangeFilter} />
        <ContactsList
          contacts={filterContact}
          onRemoveContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
