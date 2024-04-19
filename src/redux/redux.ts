import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import appSlice from "./app/appSlice";

const commonConfig = {
  key: "proHome/user",
  storage,
};

const userConfig = {
  ...commonConfig,
  whiteList: ["isLoggedIn", "token", "current"],
};

const rootReducer = combineReducers({
  user: persistReducer(userConfig, userSlice),
  app: appSlice
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
