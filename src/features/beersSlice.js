import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const beersAdapter = createEntityAdapter();

const initialState = beersAdapter.getInitialState({
  status: "idle",
  error: null
});

export const fetchBeers = createAsyncThunk("beers/fetchBeers", async () => {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const data = await response.json();

  function addMarketCart() {
    const beers = {};
    if(localStorage.length) {
      for(let i = 0; i < localStorage.length; i++) {
        const idBeer = localStorage.key(i);
        beers[idBeer] = idBeer;
      }
    }
    for(let i = 0; i < data.length; i++) {
      let id = data[i].id;
      if(beers[id]){
        data[i].isCart = true;
      } else {
        data[i].isCart = false;
      }
    }
  }

  await addMarketCart();
  console.log(data);

  return data;
});

const beersSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.entities[action.payload].isCart = true;
    },
    removeFromBasket(state, action) {
      state.entities[action.payload].isCart = false;
    },
    deletingAllFromTheBasket(state, action) {
      for(let i = 0; i < action.payload.length; i++) {
        state.entities[action.payload[i]].isCart = false;
      }
    }
  },
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

export const { addToBasket, removeFromBasket, deletingAllFromTheBasket } = beersSlice.actions;

export const {
  selectAll: selectAllBeers,
  selectById: selectBeerById,
  selectIds: selectBeerIds
} = beersAdapter.getSelectors(state => state.beers);
