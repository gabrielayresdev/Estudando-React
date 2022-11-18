import React from 'react';

const Input = ({ id, type, label, value, setValue, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
