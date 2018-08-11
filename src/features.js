import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FeaturesApp from './FeaturesApp';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#6ec6ff',
        main: '#2196f3',
        dark: '#0069c0',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const app = (
    <MuiThemeProvider theme={theme}>
        <FeaturesApp />
    </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('featureroot'));