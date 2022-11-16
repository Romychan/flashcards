import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_SETTINGS } from '../../utils/constants/training';
import { SETTINGS_STORAGE } from '../../utils/constants/flashcard';

import { IFlashcard } from '../../types/Flashcard';

const initialState = {
  cards: [] as IFlashcard[],
  currentCard: 0,
  settings: JSON.parse(
    localStorage.getItem(SETTINGS_STORAGE) || JSON.stringify(DEFAULT_SETTINGS),
  ),
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
    setMaxCards: (state, action: PayloadAction<number | string>) => {
      state.settings.maxCards = action.payload;

      localStorage.setItem(SETTINGS_STORAGE, JSON.stringify(state.settings));
    },
    setAutoVoice: (state, action: PayloadAction<boolean>) => {
      state.settings.autoVoice = action.payload;

      localStorage.setItem(SETTINGS_STORAGE, JSON.stringify(state.settings));
    },
    resetTraining: () => initialState,
  },
});

export const trainingReducer = trainingSlice.reducer;
export const trainingAction = trainingSlice.actions;
