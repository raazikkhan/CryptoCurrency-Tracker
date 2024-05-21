import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-t4d721h3xbyn25h7.us.auth0.com"
  clientId="U7j3JZLzlzb8Tj9AsClfYY7DuOAaaTj6"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <App />
  </Auth0Provider>
);
