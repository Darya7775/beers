import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction, EntityAdapter } from '@reduxjs/toolkit'
import type { RootState } from '../store';

interface ExtendedEntityAdapterState {
  entities: {
    [key: string]: {
      quantity: number,
      price: number,
      name: string
    }
  },
  ids: number[]
};

const initialState: ExtendedEntityAdapterState = {
  entities: {},
  ids: [],
};

const basketAdapter = createEntityAdapter();

basketAdapter.getInitialState(initialState);

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<{}[]>) {
      basketAdapter.upsertMany(state, action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      basketAdapter.removeOne(state, action.payload);
    },
    decrementBeers(state, action: PayloadAction<number>) {
      if(state.entities[action.payload].quantity === 1){
        state.entities[action.payload].quantity = 1;
      } else {
        state.entities[action.payload].quantity--;
      }
    },
    incrementBeers(state, action: PayloadAction<number>) {
      state.entities[action.payload].quantity++;
    },
    updatePrice(state, action: PayloadAction<{id: number, price: number}>) {
      state.entities[action.payload.id].price = action.payload.price;
    },
    clearBasket(state) {
      basketAdapter.removeAll(state);
    }
  }
});

export default basketSlice.reducer;

export const { addProducts, decrementBeers, incrementBeers, updatePrice, removeProduct, clearBasket } = basketSlice.actions;

interface ListBeers {
  price: number,
  name: string,
  quantity: number,
}[];

export const {
  selectAll: selectAllBeersBasket,
  selectById: selectBeerBasketById,
  selectIds: selectBeerBasketIds
} = (basketAdapter as EntityAdapter<ListBeers>).getSelectors<RootState>(state => state.basket);
