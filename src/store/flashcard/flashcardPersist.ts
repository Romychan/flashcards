import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { FLASHCARDS_STORAGE } from '../../utils/constants/flashcard';

import { flashcardReducer } from './flashcardSlice';

export const flashcardsPersistConfig = {
  key: FLASHCARDS_STORAGE,
  storage,
};

export const flashcardsPersistedReducer = persistReducer(
  flashcardsPersistConfig,
  flashcardReducer,
);
