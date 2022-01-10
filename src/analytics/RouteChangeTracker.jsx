import React from 'react';
import { withRouter } from 'react-router-dom';
import GA4React from 'ga-4-react';

const ga4react = new GA4React(process.env.REACT_APP_TRACKING_ID);

const RouteChangeTracker = ({ history }) => {
  history.listen((location, action) => {
    ga4react.set({ page: location.pathname });
    ga4react.send(location.pathname);
  });

  return <div></div>;
};

export default withRouter(RouteChangeTracker);
