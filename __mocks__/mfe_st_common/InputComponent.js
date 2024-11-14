import React from 'react';

const InputComponent = ({ id, value, onChange, ...restProps }) => (
    <input id={id} value={value} onChange={onChange} {...restProps} />
);

export default InputComponent;