import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// import '../assets/stylesheets/application.scss';
// import '../node_modules/parallax-js/dist/parallax.min';
// import '../node_modules/chart.js/dist/Chart';
// import '../init';
// import '../copy';
// import '../open';
// import '../parallaxScroll';
// import '../shoWidget';
// import '../scroll';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
