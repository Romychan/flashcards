import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_SETTINGS } from '../../utils/constants/training';

import { IFlashcard } from '../../types/Flashcard';

const initialState = {
  cards: [] as IFlashcard[],
  currentCard: 0,
  settings: DEFAULT_SETTINGS,
};

export const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    setTrainingCard: (state, action: PayloadAction<IFlashcard[]>) => {
      state.cards = action.payload;
      state.currentCard = 0;
    },
    setCurrentCard: (state) => {
      state.currentCard++;
    },
    setMaxCards: (state, action: PayloadAction<number>) => {
      state.settings.maxCards = action.payload;
    },
    setAutoVoice: (state, action: PayloadAction<boolean>) => {
      state.settings.autoVoice = action.payload;
    },
    resetTraining: () => initialState,
  },
});

export const trainingReducer = trainingSlice.reducer;
export const trainingAction = trainingSlice.actions;
