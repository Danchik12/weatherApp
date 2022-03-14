import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './Provider/ThemeProvider'

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <ThemeProvider>
    <App />
    </ThemeProvider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


