import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const { id, onChange, value, label, type } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} type={type} onChange={onChange} value={value}></input>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "number", "password"])
};

Input.defaultProps = {
  type: "text"
};

export default Input;
