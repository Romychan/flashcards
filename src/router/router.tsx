import React from 'react';
import { Navigate } from 'react-router-dom';

import {
  COMPLETE_PATH,
  DEFAULT_PATH,
  LEARN_PATH,
  TRAINING_PATH,
  WORDS_PATH,
} from '../utils/constants/routes';

import { FlashcardsPage } from '../pages/FlashcardsPage';
import { FlashcardsCompleted } from '../components/Flashcards/FlashcardsCompleted';
import { FlashcardsList } from '../components/Flashcards/FlashcardsList';
import { TrainingPage } from '../pages/TrainingPage';

export const APP_ROUTES = [
  {
    path: WORDS_PATH,
    element: <FlashcardsPage />,
    children: [
      { path: '', element: <Navigate to={LEARN_PATH} replace /> },
      {
        path: LEARN_PATH,
        element: <FlashcardsList />,
      },
      {
        path: COMPLETE_PATH,
        element: <FlashcardsCompleted />,
      },
    ],
  },
  { path: TRAINING_PATH, element: <TrainingPage /> },
  { path: '*', element: <Navigate to={DEFAULT_PATH} replace /> },
];
