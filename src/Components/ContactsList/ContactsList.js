import React from "react";
import ContactListItem from "./ContactListItem";

import PropTypes from "prop-types";

const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    contacts.length > 0 && (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onRemoveContact(id)}
          />
        ))}
      </ul>
    )
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
