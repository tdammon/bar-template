import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css'
import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname + window.location.search);
const trackingId = 'UA-167603833-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, {
    debug: true
});
ReactGA.set({
  userId: Math.random(),

})

ReactDOM.render(<App />, document.getElementById('root'));