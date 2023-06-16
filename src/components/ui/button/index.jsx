import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "/src/features/basketSlice";
import { selectBeerById, addToBasket, removeFromBasket } from "/src/features/beersSlice";
import * as S from "./style";

export function ButtonActive({ beerId, classB }) {
  const dispatch = useDispatch();
  return(
    <S.ButtonActiveStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(removeFromBasket(beerId));
        dispatch(removeProduct(beerId));
        localStorage.removeItem(beerId);
      }}>Remove from cart
    </S.ButtonActiveStyle>
  );
}

export function Button({ beerId, classB }) {
  const dispatch = useDispatch();
  const beer = useSelector(state => selectBeerById(state, beerId));

  return(
    <S.ButtonStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(addToBasket(beerId));
        console.log(beer)
        localStorage.setItem(beerId, JSON.stringify({...beer, quantity: 1, price: beer.ibu, isCart: true}));
      }}>Add to cart
    </S.ButtonStyle>
  );
}
