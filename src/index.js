import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f73378',
      main: '#f50057',
      dark: '#ab003c',
      contrastText: '#fff',
    },
  },
});

const app = (
  <BrowserRouter>
  <CssBaseline >
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
</ CssBaseline>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));