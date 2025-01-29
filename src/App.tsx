import "./index.scss";
import "@fontsource-variable/roboto-condensed";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../msalConfig";

import { MainApp } from "./components/session/mainApp";
import { PrivateRoute } from "./components/session/privateRoute";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import ErrorBoundary from "mfe_st_errors/ErrorBoundary";
import LoginComponent from "mfe_st_login/LoginComponent";

const args = {
  environment:
    process.env.NODE_ENV === "production" ? "production" : "development",
};

const msalInstance = new PublicClientApplication(msalConfig(args));

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://bqdxn3lstb.execute-api.us-east-1.amazonaws.com"
      : "http://localhost:4000",
  cache: new InMemoryCache(),
});
const App = () => (
  <ApolloProvider client={client}>
    <MsalProvider instance={msalInstance}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <Routes>
              <Route
                path="/login"
                element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <LoginComponent />
                  </div>
                }
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <MainApp />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Router>
    </MsalProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
