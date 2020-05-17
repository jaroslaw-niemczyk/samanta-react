import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';

//Bootstrap plugin init
$(function () {
  ($('[data-toggle="popover"]') as any).popover();
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
