import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './Provider/ThemeProvider'
import {store} from './store/store';
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
   <BrowserRouter>
   <ThemeProvider>
    <App />
    </ThemeProvider>
     </BrowserRouter>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


