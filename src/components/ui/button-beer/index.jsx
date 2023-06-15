import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasketOneBeer, removeFromBasketOneBeer } from "/src/features/beersSlice";
import * as S from "./style";

export function ButtonActive({ beerId, classB }) {
  const dispatch = useDispatch();
  return(
    <S.ButtonActiveStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(removeFromBasketOneBeer(beerId));
        localStorage.removeItem(beerId);
      }}>Remove from cart
    </S.ButtonActiveStyle>
  );
}

export function Button({ beerId, classB }) {
  const dispatch = useDispatch();
  const beer = useSelector(state => state.beers.oneBeer);

  return(
    <S.ButtonStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(addToBasketOneBeer(beerId));
        localStorage.setItem(beerId, JSON.stringify({...beer, quantity: 1, price: beer.ibu, isCart: true}));
      }}>Add to cart
    </S.ButtonStyle>
  );
}
