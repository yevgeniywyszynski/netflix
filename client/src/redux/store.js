import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import filmSliceReducer from "./filmSlice";
import usersSlice from "./usersSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loaded"],
};

const rootReducer = persistReducer(persistConfig, usersSlice);

const store = configureStore({
  reducer: {
    films: filmSliceReducer,
    users: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;
