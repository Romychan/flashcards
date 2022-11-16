import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardText, IFlashcard } from '../../types/Flashcard';
import {
  FLASHCARDS_STORAGE,
  COMPLETED_STORAGE,
  MIN_LEARNING_STEP,
  MAX_LEARNING_STEP,
} from '../../utils/constants/flashcard';

import { MOCK_FLASHCARDS } from '../../__mock__/Flashcards';

const initialState = {
  cards: JSON.parse(
    localStorage.getItem(FLASHCARDS_STORAGE) || JSON.stringify(MOCK_FLASHCARDS),
  ) as IFlashcard[],
  completed: JSON.parse(
    localStorage.getItem(COMPLETED_STORAGE) || '[]',
  ) as IFlashcard[],
};
export const flashcardSlice = createSlice({
  name: 'flashcard',
  initialState,
  reducers: {
    addCard: (
      state,
      action: PayloadAction<{ original: ICardText; translate: ICardText }>,
    ) => {
      state.cards.push({
        ...action.payload,
        progress: MIN_LEARNING_STEP,
        id: Date.now(),
      });

      localStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(state.cards));
    },
    updateCards: (state, action: PayloadAction<IFlashcard[]>) => {
      state.cards = action.payload;
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);

      localStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(state.cards));
    },
    deleteCompletedCard: (state, action: PayloadAction<number>) => {
      state.completed = state.completed.filter(
        (card) => card.id !== action.payload,
      );

      localStorage.setItem(COMPLETED_STORAGE, JSON.stringify(state.completed));
    },
    updateProgressCard: (
      state,
      action: PayloadAction<{ id: number | string; progress: boolean }>,
    ) => {
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id,
      );
      const card = state.cards[index];

      if (action.payload.progress) {
        card.progress++;
      } else {
        card.progress =
          card.progress === MIN_LEARNING_STEP
            ? MIN_LEARNING_STEP
            : card.progress - 1;
      }

      if (card.progress === MAX_LEARNING_STEP) {
        state.completed.push(card);
        state.cards = state.cards.filter((item) => item.id !== card.id);
      }

      localStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(state.cards));
      localStorage.setItem(COMPLETED_STORAGE, JSON.stringify(state.completed));
    },
  },
});

export const flashcardReducer = flashcardSlice.reducer;
export const flashcardAction = flashcardSlice.actions;
