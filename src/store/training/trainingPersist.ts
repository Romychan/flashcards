import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { SETTINGS_STORAGE } from '../../utils/constants/flashcard';

import { trainingReducer } from './trainingSlice';

export const trainingPersistConfig = {
  key: SETTINGS_STORAGE,
  storage,
  blacklist: ['cards', 'currentCard'],
};

export const trainingPersistedReducer = persistReducer(
  trainingPersistConfig,
  trainingReducer,
);
