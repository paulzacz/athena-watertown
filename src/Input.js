import React from "react";

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

export default Input;
