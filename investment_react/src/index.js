import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Store';
import { Provider } from "react-redux";
import { LogProvider } from "./components/context/LogContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LogProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </LogProvider>
);
