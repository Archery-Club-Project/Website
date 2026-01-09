import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

// Import environment debugging utility (only runs in development)
import './utils/env-debug.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App/>
    </HelmetProvider>
  </React.StrictMode>,
)