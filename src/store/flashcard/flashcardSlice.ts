import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICardText, IFlashcard } from '../../types/Flashcard';

import {
  MIN_LEARNING_STEP,
  MAX_LEARNING_STEP,
} from '../../utils/constants/flashcard';

import { MOCK_FLASHCARDS } from '../../__mock__/Flashcards';

const initialState = {
  cards: MOCK_FLASHCARDS as IFlashcard[],
  completed: [] as IFlashcard[],
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
    },
    updateCards: (state, action: PayloadAction<IFlashcard[]>) => {
      state.cards = action.payload;
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    deleteCompletedCard: (state, action: PayloadAction<number>) => {
      state.completed = state.completed.filter(
        (card) => card.id !== action.payload,
      );
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
    },
  },
});

export const flashcardReducer = flashcardSlice.reducer;
export const flashcardAction = flashcardSlice.actions;
