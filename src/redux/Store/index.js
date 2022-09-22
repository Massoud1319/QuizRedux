import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import reducers from "../reducers";

const composedEnhancer = compose(applyMiddleware(thunkMiddleware));

const store = createStore(reducers, composedEnhancer);
export default store;

// import { createSlice, configureStore } from "@reduxjs/toolkit";
