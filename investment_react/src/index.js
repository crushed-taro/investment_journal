import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LogProvider } from "./components/context/LogContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LogProvider>
    <App />
  </LogProvider>
);
