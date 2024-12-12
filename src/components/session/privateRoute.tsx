import React from "react";

import { Navigate } from "react-router-dom";

const user = localStorage.getItem("user");

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  if (!user) return <Navigate to="/login" replace />;
  return children;
};
