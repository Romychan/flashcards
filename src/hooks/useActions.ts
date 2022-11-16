import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { flashcardAction } from '../store/flashcard/flashcardSlice';
import { trainingAction } from '../store/training/trainingSlice';

const allActions = {
  ...flashcardAction,
  ...trainingAction,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
