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
  if (cookieConsent !== undefined || cookieConsent) {
    await ga4react
      .initialize()
      .then((res) => console.log("Analytics Success."))
      .catch((err) => console.log("Analytics Failure."));
  }
};

function App() {
  const [acceptCookie, setAcceptCookie] = useState(false);
  const cookieConsent = getCookieConsentValue();

  useEffect(() => {
    analyticsEnabled(cookieConsent);
  }, [cookieConsent, acceptCookie]);

  return (
    <ThemeProvider theme={theme}>
      <CookieConsent
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
