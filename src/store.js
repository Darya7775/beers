import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "/src/features/beersSlice";

export default configureStore({
  reducer: {
    beers: beersReducer
  }
});
