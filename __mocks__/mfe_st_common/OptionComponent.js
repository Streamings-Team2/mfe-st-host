import React from 'react';

const OptionComponent = ({ children, ...props }) => (
    <option {...props}>{children}</option>
);

export default OptionComponent;