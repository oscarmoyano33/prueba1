import React from 'react';

const Select = ({option,options,optionSelected}) => {
    return (
        <select value={option} onChange={(evento) => optionSelected(evento.target.value)}>
            {
                options.map((op) => (
                    <option key={op.value} value={op.value}>
                        {op.text}
                    </option>
                ))
            }
        </select>
    );
};

export default Select;