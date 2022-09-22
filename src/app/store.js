import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import menuSlice from "../features/menu/menu-slice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
});
