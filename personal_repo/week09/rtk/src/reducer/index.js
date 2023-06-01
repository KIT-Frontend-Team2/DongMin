import { combineReducers } from "redux";
import { calSlice } from "./calculate";
export const rootReducer = combineReducers({ calculate: calSlice.reducer });
