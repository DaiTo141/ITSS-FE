import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import AppRoutes from 'components/Routes/AppRoute';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const getLibrary = (provider: any) => {
  return new Web3Provider(provider);
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
