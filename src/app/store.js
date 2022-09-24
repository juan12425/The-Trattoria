import { configureStore } from '@reduxjs/toolkit';

import menuReducer from "../features/menu/menu-slice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
