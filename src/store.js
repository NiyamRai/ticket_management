import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import UserSlice from "./Features/UserSlice";
const persitConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({ user: UserSlice });
const persistedReducer = persistReducer(persitConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
