import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MaterialTheme = () => (

  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);
injectTapEventPlugin();


ReactDOM.render(<MaterialTheme/>,document.getElementById('app'));