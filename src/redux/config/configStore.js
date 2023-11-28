// AFTER
import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  //counter.js의 Reducer가 안에 들어감
  reducer: {
    counter: counter,
  },
});

export default store;

// BEFORE
// import { combineReducers, createStore } from "redux";
// import counter from "../modules/counter";
// const rootReducer = combineReducers({
//   counter,
// });
// const store = createStore(rootReducer);
// export default store;
