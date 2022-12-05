import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { appSlice } from "./Slices/appSlice";
import { secSlice } from "./Slices/secSlice";
import { securityApi } from "./Services/Security";
import { usersApi } from "./Services/Users";


const preLoadedState = JSON.parse(localStorage.getItem('reduxState') || '{}');

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    sec: secSlice.reducer,
    [securityApi.reducerPath]: securityApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      securityApi.middleware,
      usersApi.middleware
    ]),
  preloadedState: preLoadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
