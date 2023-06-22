import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "/src/features/beersSlice";
import basketReducer from "/src/features/basketSlice";
import sessionReducer from "/src/features/session-slice";
import userReducer from "/src/features/user-slice";

export default configureStore({
  reducer: {
    beers: beersReducer,
    basket: basketReducer,
    session: sessionReducer,
    user: userReducer
  }
});
