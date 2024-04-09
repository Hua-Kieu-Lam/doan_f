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
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: {
    // app: appSlice,
    // products: productSlice,
    user: persistReducer(userConfig, userSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
