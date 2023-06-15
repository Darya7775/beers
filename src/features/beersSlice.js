import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const beersAdapter = createEntityAdapter();

const initialState = beersAdapter.getInitialState({
  status: "idle",
  count: 1,
  oneBeerStatus: "idle",
  error: null
});

export const fetchOneBeers = createAsyncThunk("beers/fetchOneBeers", async(id) => {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const data = await response.json();

  if(localStorage.getItem(id)) {
    data[0].isCart = true;
  } else {
    data[0].isCart = false;
  }

  console.log(data)

  return(data);
});

export const fetchBeers = createAsyncThunk("beers/fetchBeers", async (currentPage) => {
  const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=12`);
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
      if(state.ids.length !== 0) {
        state.entities[action.payload].isCart = false;
      }
    },
    deletingAllFromTheBasket(state, action) {
      if(state.ids.length !== 0) {
        for(let i = 0; i < action.payload.length; i++) {
          state.entities[action.payload[i]].isCart = false;
        }
      }
    },
    addCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    addToBasketOneBeer(state, action) {
      if(state.entities[action.payload]) state.entities[action.payload].isCart = true;
      state.oneBeer.isCart = true;
    },
    removeFromBasketOneBeer(state, action) {
      if(state.entities[action.payload]) state.entities[action.payload].isCart = false;
      state.oneBeer.isCart = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBeers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBeers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.count = Math.ceil(80 / 10);
        if(state.ids.length !== 0) beersAdapter.removeAll(state, action.payload);
        beersAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchBeers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchOneBeers.pending, (state) => {
        state.oneBeerStatus = "loading";
      })
      .addCase(fetchOneBeers.fulfilled, (state, action) => {
        state.oneBeerStatus = "succeeded";
        state.oneBeer = {...action.payload[0]};
      })
      .addCase(fetchOneBeers.rejected, (state, action) => {
        state.oneBeerStatus = "failed";
        state.error = action.error.message;
      })
  }
});

export default beersSlice.reducer;

export const  { addToBasket, addCurrentPage, removeFromBasket,
                deletingAllFromTheBasket, addOneBeer, addToBasketOneBeer,
                removeFromBasketOneBeer
              } = beersSlice.actions;

export const {
  selectAll: selectAllBeers,
  selectById: selectBeerById,
  selectIds: selectBeerIds
} = beersAdapter.getSelectors(state => state.beers);

