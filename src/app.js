import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
require("expose?$!expose?jQuery!jquery");
require('bootstrap');


ReactDOM.render(<App/>,document.getElementById('app'));