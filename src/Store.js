import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // Utilisation du localStorage pour persister l'état
import userReducer from './slices/userSlice';  // Assurez-vous que userSlice est correct

// Configuration de redux-persist
const persistConfig = {
  key: 'root',
  storage, // Utiliser le localStorage pour persister l'état
};

// Créez un réducteur persistant
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer, // Applique le réducteur persistant
  },
});

export const persistor = persistStore(store); // Crée un persistor pour gérer le stockage
export default store;
