import { Configuration } from "@azure/msal-browser";

export const msalConfig = (args:any):Configuration => {
  const isProd = args.environment === "production";
  const redirectUri = isProd
    ? "https://d3ukptxqg81hnz.cloudfront.net"
    : "http://localhost:3000";

  return {
    auth: {
      clientId: "25dc2e1a-eced-46ab-8e36-dd230ddfdbd8",
      tenant: "https://login.microsoftonline.com/25dc2e1a-eced-46ab-8e36-dd230ddfdbd8",
      redirectUri: redirectUri,
    },
  };
};