/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TextField = ({
  id,
  placeholder,
  label,
  type,
  errors,
  value,
  handleOnChange,
}) => {
  return (
    <div className='mb-3'>
      <label className='mb-2' htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        className='form-control mb-1'
        type={type}
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={handleOnChange}
      ></input>
      <div className='field-error'>{errors}</div>
    </div>
  );
};

export default TextField;
