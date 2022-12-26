import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { flashcardSlice } from './flashcard/flashcardSlice';
import { flashcardsPersistedReducer } from './flashcard/flashcardPersist';
import { trainingSlice } from './training/trainingSlice';
import { trainingPersistedReducer } from './training/trainingPersist';

export const store = configureStore({
  reducer: {
    [flashcardSlice.name]: flashcardsPersistedReducer,
    [trainingSlice.name]: trainingPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type TypeRootState = ReturnType<typeof store.getState>;
