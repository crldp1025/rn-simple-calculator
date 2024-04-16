import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculator/calculatorReducer';

export const store = configureStore({
  reducer: {
    value: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;