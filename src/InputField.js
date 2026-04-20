import React from "react";

function InputField({ label, name, type = "text", value, onChange, error }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
      />
      {error && <small style={{ color: "red" }}>{error}</small>}
      <br /><br />
    </div>
  );
}

export default InputField;
