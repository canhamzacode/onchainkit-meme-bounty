import React from 'react'
import ReactDOM from 'react-dom/client'
import '@coinbase/onchainkit/styles.css';
import './index.css'
import App from './App.tsx'
import OnchainProviders from './provider/OnchainProviders.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OnchainProviders>
      <App />
    </OnchainProviders>
  </React.StrictMode>,
)
