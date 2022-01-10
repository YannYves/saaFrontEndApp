import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GA4React from 'ga-4-react';

// REDUX READY
// import rootReducer from './reducers';
// import createSagaMiddleware from 'redux-saga';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';

// const initialState = {};
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// analytics
const ga4react = new GA4React(process.env.REACT_APP_TRACKING_ID);

(async (_) => {
  await ga4react
    .initialize()
    .then((res) => console.log('Analytics Success.'))
    .catch((err) => console.log('Analytics Failure.'))
    .finally(() => {
      ReactDOM.render(
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>,
        document.getElementById('root')
      );
    });
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
