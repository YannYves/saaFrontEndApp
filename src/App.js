import React from 'react';
import './App.css';
import MenuAppBar from './components/navbar/MenuAppBar';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './UI/Theme';
import ReactGA from 'react-ga';
import RouteChangeTracker from './analytics/RouteChangeTracker';
// analytics

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID, {
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Routes />
      <RouteChangeTracker />
    </ThemeProvider>
  );
}

export default App;
