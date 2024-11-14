// __mocks__/mfe_st_common/Button.js
import React from 'react';

// Componente mock simple para Button
const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;