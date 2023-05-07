import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const beersAdapter = createEntityAdapter();

const initialState = beersAdapter.getInitialState({
  status: "idle",
  error: null
});

export const fetchBeers = createAsyncThunk("beers/fetchBeers", async () => {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const data = await response.json();

  console.log(data);

  return data;
});

const beersSlice = createSlice({
    name: "beers",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchBeers.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchBeers.fulfilled, (state, action) => {
          state.status = "succeeded";
          beersAdapter.upsertMany(state, action.payload);
        })
        .addCase(fetchBeers.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
    }
});

export default beersSlice.reducer;

export const {
  selectAll: selectAllBeers,
  selectById: selectBeerById,
  selectIds: selectBeerIds
} = beersAdapter.getSelectors(state => state.beers);
