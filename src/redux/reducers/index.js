import questionsReducer from "./questionsReducer";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  allQuestions: questionsReducer,
});

export default reducers;
