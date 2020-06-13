import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider} from '@material-ui/core'
import MomentUtils from '@date-io/moment';
import theme from './utils/material-theme'

Amplify.configure(awsconfig);

ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
