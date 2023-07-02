import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "./features/beers-slice";
import basketReducer from "./features/basketSlice";
import sessionReducer from "./features/session-slice";
import userReducer from "./features/user-slice";
import commentsReducer from "./features/comments-slice";

const store = configureStore({
  reducer: {
    beers: beersReducer,
    basket: basketReducer,
    session: sessionReducer,
    user: userReducer,
    comments: commentsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
