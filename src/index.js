import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
           main: '#6862FF'
        },
        secondary: {
            main: '#212121'
        },
        type: 'dark',
        typography: {
            useNextVariants: true,
        },
        button: {
            margin: 200,
        },
    }
    
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
)
serviceWorker.unregister();
