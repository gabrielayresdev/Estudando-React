import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>
        <Input label="email" id="email" required />
      </p>
      <p>
        <Input label="senha" id="senha" type="password" />
      </p>
      <Button />
    </form>
  );
};

export default Form;
