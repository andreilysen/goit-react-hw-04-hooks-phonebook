import React from "react";
import PropTypes from "prop-types";
import styles from "../Form/Form.module.css";

const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
