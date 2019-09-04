import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import init from '../js/init.js'
import varSVG from '../js/svgVar.js'
import svg from '../js/svg.js'
import shoWidget from '../js/shoWidget.js'
import copy from '../js/copy.js'
import parallaxScroll from '../js/parallaxScroll.js'
import scroll from '../js/scroll.js'

svg(varSVG)
shoWidget()
copy()
parallaxScroll()
scroll()

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
