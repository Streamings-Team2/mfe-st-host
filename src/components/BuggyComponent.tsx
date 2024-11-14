import React from "react";

const BuggyComponent: React.FC = () => {
  throw new Error("Simulated error!"); // Lanza un error intencional
  console.error = () => {};

};

export default BuggyComponent;
