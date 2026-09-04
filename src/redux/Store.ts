import { combineReducers, configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GameSlice";
import SearchSlice from "./SearchSlice";

const rootReducer = combineReducers({
  games: GameSlice,
  search: SearchSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
