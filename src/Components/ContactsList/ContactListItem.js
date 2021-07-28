import React from "react";
import PropTypes from "prop-types";

import styles from "./Contact.module.css";

const ContactListItem = ({ name, number, onClickRemove }) => (
  <li className={styles.items}>
    <p className={styles.item}>{name}:</p>
    <p className={styles.item}>{number}</p>
    <button onClick={onClickRemove}>Delete</button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
