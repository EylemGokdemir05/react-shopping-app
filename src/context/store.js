import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cardReducer from "./reducer";

export const store = combineReducers({
  reducer: cardReducer,
});
