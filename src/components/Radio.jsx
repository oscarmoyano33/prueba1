import React from 'react';

const Radio = ({ option, options, optionSelected }) => {
  return (
    <div>
      {options.map((op) => (
        <div key={op.value}>
          <button
            type='button' // Tipo de botón
            id={`option_${op.value}`}
            name='options'
            value={op.value}
            onClick={() => optionSelected(op.value)} // Cambiar onChange por onClick para botones
            style={{ background: option === op.value ? 'red' : 'white' }} // Ejemplo de estilo condicional
          >
            {op.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Radio;
