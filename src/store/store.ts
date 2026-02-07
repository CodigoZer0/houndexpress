import { configureStore } from '@reduxjs/toolkit';
import guideReducer from './guideSlice';

export const store = configureStore({
  reducer: {
    guide: guideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
