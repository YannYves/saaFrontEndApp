import React, { useEffect, useState } from "react";
import "./App.css";
import MenuAppBar from "./components/navbar/MenuAppBar";
import Routes from "./Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./UI/Theme";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import GA4React from "ga-4-react";
const ga4react = new GA4React(process.env.REACT_APP_TRACKING_ID);

const analyticsEnabled = async (cookieConsent) => {
  if (cookieConsent === "true") {
    await ga4react.initialize();
  }
};

function App() {
  const [acceptCookie, setAcceptCookie] = useState(false);
  const cookieConsent = getCookieConsentValue();

  useEffect(() => {
    analyticsEnabled(cookieConsent);
  }, [acceptCookie, cookieConsent]);

  return (
    <ThemeProvider theme={theme}>
      <CookieConsent
        enableDeclineButton
        onAccept={() => {
          setAcceptCookie(true);
        }}
        onDecline={() => {
          setAcceptCookie(false);
        }}
      >
        Ce site web utilise des cookies pour une expérience utilisateur optimale
      </CookieConsent>
      <MenuAppBar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
