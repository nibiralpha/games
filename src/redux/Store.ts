import { combineReducers, configureStore } from '@reduxjs/toolkit';
import GameSlice from './GameSlice';
import SearchSlice from './SearchSlice';
import DetailSlice from './DetailSlice';

const rootReducer = combineReducers({
  games: GameSlice,
  search: SearchSlice,
  detail: DetailSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
