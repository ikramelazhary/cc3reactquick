import React from 'react';
import ReactDOM from 'react-dom/client';  // Utilisation de 'react-dom/client' avec React 18+
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';  // Pour intégrer redux-persist avec React
import App from './App';
import "./i18n"; // Importer la configuration de i18n
import store, { persistor } from './Store';  // Import du store Redux

// Crée un "root" pour React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
