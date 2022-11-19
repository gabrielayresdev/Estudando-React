import React from 'react';

const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  if (active === false) {
    return null;
  }
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((opcao) => (
        <label
          key={opcao}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            id={id}
            type="radio"
            value={opcao}
            checked={value === opcao}
            onChange={onChange}
          />
          {opcao}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
