import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ThemeProvider } from "./contexts/ThemeContext";
import { CountryProvider } from "./contexts/CountryContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </ThemeProvider>
  </React.StrictMode>
)
