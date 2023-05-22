import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const basketAdapter = createEntityAdapter();
console.log(basketAdapter)

const initialState = basketAdapter.getInitialState();

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProducts(state, action) {
      basketAdapter.upsertMany(state, action.payload);
    },
    removeProduct(state, action) {
      basketAdapter.removeOne(state, action.payload);
    },
    decrementBeers(state, action) {
      if(state.entities[action.payload].quantity === 1){
        state.entities[action.payload].quantity = 1;
      } else {
        state.entities[action.payload].quantity--;
      }
    },
    incrementBeers(state, action) {
      state.entities[action.payload].quantity++;
    },
    updatePrice(state, action) {
      state.entities[action.payload.id].price = action.payload.price;
    },
    clearBasket(state) {
      basketAdapter.removeAll(state);
    }
  }
});

export default basketSlice.reducer;

export const { addProducts, decrementBeers, incrementBeers, updatePrice, removeProduct, clearBasket } = basketSlice.actions;

export const {
  selectAll: selectAllBeersBasket,
  selectById: selectBeerBasketById,
  selectIds: selectBeerBasketIds
} = basketAdapter.getSelectors(state => state.basket);
