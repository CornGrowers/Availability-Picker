// ---------------------------------------------------------------------------
// FILL THESE IN after registering the Azure AD app (see ADMIN_DEPLOYMENT.md
// for the organization-wide rollout, or README.md for the personal-account
// self-service version).
// ---------------------------------------------------------------------------
const APP_CONFIG = {
  // Azure AD "Application (client) ID" from the app registration.
  clientId: "d9926fe8-26a3-470d-ac30-96d47c04bd6f",

  // "organizations" = any work/school Microsoft Entra tenant (no personal
  // accounts). Use the org's own tenant ID here instead once known, to
  // restrict sign-in to just that tenant.
  authority: "https://login.microsoftonline.com/cedfb7f7-0481-4eda-a915-80c712b7e9e0",

  // Must exactly match a Redirect URI (type: Single-page application)
  // configured on the Azure AD app registration.
  redirectUri: "https://REPLACE_WITH_YOUR_HOSTED_DOMAIN/taskpane.html",

  // Delegated Graph permission needed to read free/busy + events.
  graphScopes: ["Calendars.Read"],

  graphBaseUrl: "https://graph.microsoft.com/v1.0",
};
