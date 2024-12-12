import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
    auth: {
      clientId: "25dc2e1a-eced-46ab-8e36-dd230ddfdbd8",
      tenant:
        "https://login.microsoftonline.com/25dc2e1a-eced-46ab-8e36-dd230ddfdbd8",
      redirectUri: "http://localhost:3000",
    },
  };