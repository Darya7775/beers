import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "/src/features/beersSlice";
import basketReducer from "/src/features/basketSlice";

export default configureStore({
  reducer: {
    beers: beersReducer,
    basket: basketReducer
  }
});
