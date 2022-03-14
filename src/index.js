import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'
import Routes from './routes/routes'

ReactDOM.render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);
