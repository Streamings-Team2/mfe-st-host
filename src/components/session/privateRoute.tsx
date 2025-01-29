import React from "react";

import { Navigate } from "react-router-dom";
import { decrypt } from "mfe_st_utils/Crypto";

export const PrivateRoute = <T,>({ children }: { children: JSX.Element }) => {
  let user: T | null = null;
  try {
    const encryptedUser = localStorage.getItem("user");
    if (encryptedUser) user = decrypt<T>(encryptedUser);
  } catch (error) {
    localStorage.removeItem("user");
  }

  if (!user) return <Navigate to="/login" replace />;
  return children;
};
