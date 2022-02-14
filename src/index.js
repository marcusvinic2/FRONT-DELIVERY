import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'

ReactDOM.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);
