import { configureStore } from '@reduxjs/toolkit';

import { flashcardSlice, flashcardReducer } from './flashcard/flashcardSlice';
import { trainingSlice, trainingReducer } from './training/trainingSlice';

export const store = configureStore({
  reducer: {
    [flashcardSlice.name]: flashcardReducer,
    [trainingSlice.name]: trainingReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
