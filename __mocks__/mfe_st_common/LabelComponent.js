import React from 'react';

const LabelComponent = React.forwardRef(({ htmlFor, children, ...restProps }, ref) => (
    <label ref={ref} htmlFor={htmlFor} {...restProps}>
        {children}
    </label>
));

export default LabelComponent;