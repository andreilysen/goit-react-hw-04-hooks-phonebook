import { useState, useEffect } from "react";

import Form from "../Form";
import Filter from "../Filter";
import ContactsList from "../ContactsList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("data"));
    setContacts(storage);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(contacts));
  }, [contacts]);

  const AddContact = (newContact) => {
    const inContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (inContact) {
      alert(`${inContact.name}  is already in contacts!`);
      return;
    }
    setContacts((prevState) => [newContact, ...prevState]);
  };

  const ChangeFilter = (e) => {
    console.log(e);

    setFilter(e.target.value);
  };

  const removeContact = (dataId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== dataId)
    );
  };

  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Phonebook</h2>
      <Form onAddContacts={AddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={ChangeFilter} />
      <ContactsList contacts={filterContact} onRemoveContact={removeContact} />
    </>
  );
};

export default App;
