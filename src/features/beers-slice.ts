import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

type FetchingStatus = "idle" | "loading" | "succeeded" | "failed";

interface ExtendedEntityAdapterState {
  status: FetchingStatus
  count: number,
  oneBeer: {
    isCart: boolean
  },
  oneBeerStatus: FetchingStatus,
  currentPage: number,
  error: string | undefined,
  entities: {
    [key: string]: {
      isCart: boolean
    }
  },
  ids: number[]
};

interface Options {
  [key: string]: object
};

type MyData =  {
    isCart: boolean,
    id: number
}[];

const initialState: ExtendedEntityAdapterState = {
  status: "idle",
  entities: {},
  ids: [],
  count: 1,
  oneBeer: {
    isCart: false
  },
  oneBeerStatus: "idle",
  currentPage: 1,
  error: ''
};

const beersAdapter = createEntityAdapter();

beersAdapter.getInitialState(initialState);

// запрос данных одного пива
export const fetchOneBeers = createAsyncThunk("beers/fetchOneBeers", async(id: string) => {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const data = await response.json() as MyData;

  function addMarketCart() {
    let beers = {} as Options;
    if(localStorage.getItem("basket")) {
      beers = JSON.parse(localStorage.getItem("basket") as string);

      if(beers[id]) {
        data[0].isCart = true;
      } else {
        data[0].isCart = false;
      }
    }
  }

  await addMarketCart();

  return data;
});

// запрос пива на одну страницу
export const fetchBeers = createAsyncThunk("beers/fetchBeers", async (currentPage: string) => {
  const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=12`);
  const data = await response.json() as MyData;

  function addMarketCart() {
    let beers = {} as Options;
    if(localStorage.getItem("basket")) {
      beers = JSON.parse(localStorage.getItem("basket") as string);
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
    addToBasket(state, action: PayloadAction<number>) {
      state.entities[action.payload].isCart = true;
    },
    removeFromBasket(state, action: PayloadAction<number>) {
      if(state.ids.length !== 0) {
        state.entities[action.payload].isCart = false;
      }
    },
    deletingAllFromTheBasket(state, action: PayloadAction<number[]>) {
      if(state.ids.length !== 0) {
        for(let i = 0; i < action.payload.length; i++) {
          state.entities[action.payload[i]].isCart = false;
        }
      }
    },
    addCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    addToBasketOneBeer(state, action: PayloadAction<number>) {
      if(state.entities[action.payload]) state.entities[action.payload].isCart = true;
      state.oneBeer.isCart = true;
    },
    removeFromBasketOneBeer(state, action: PayloadAction<number>) {
      if(state.entities[action.payload]) state.entities[action.payload].isCart = false;
      state.oneBeer.isCart = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBeers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBeers.fulfilled, (state, action: PayloadAction<{}[]>) => {
        state.status = "succeeded";
        state.count = Math.ceil(80 / 10);
        if(state.ids.length !== 0) beersAdapter.removeAll(state);
        beersAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchBeers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchOneBeers.pending, (state) => {
        state.oneBeerStatus = "loading";
      })
      .addCase(fetchOneBeers.fulfilled, (state, action: PayloadAction<{isCart: boolean}[]>) => {
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
                deletingAllFromTheBasket, addToBasketOneBeer,
                removeFromBasketOneBeer
              } = beersSlice.actions;

export const {
  selectAll: selectAllBeers,
  selectById: selectBeerById,
  selectIds: selectBeerIds
} = beersAdapter.getSelectors<RootState>((state) => state.beers);

