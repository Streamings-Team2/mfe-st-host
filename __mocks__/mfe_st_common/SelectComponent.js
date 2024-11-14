import React from 'react';

const SelectComponent = ({ id, value, onChange, children, ...restProps }) => (
    <select id={id} value={value} onChange={onChange} {...restProps}>
        {children}
    </select>
);

export default SelectComponent;