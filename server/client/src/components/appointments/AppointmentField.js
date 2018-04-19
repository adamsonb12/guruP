import React from 'react';

export default ({ input, label }) => {
  return (
    <div className="inputContainer">
      <label className="inputLabel">{label}: </label>
      <input {...input} className="inputStyle" />
    </div>
  );
};
