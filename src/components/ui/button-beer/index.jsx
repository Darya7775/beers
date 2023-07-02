import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "/src/features/basketSlice";
import { addToBasketOneBeer, removeFromBasketOneBeer } from "/src/features/beers-slice";
import * as S from "./style";

export function ButtonActive({ beerId, classB }) {
  const dispatch = useDispatch();
  return(
    <S.ButtonActiveStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(removeFromBasketOneBeer(beerId));
        dispatch(removeProduct(beerId));
        const basket = JSON.parse(localStorage.getItem("basket"));
        delete basket[beerId];
        localStorage.setItem("basket", JSON.stringify(basket));// вынести в функцию
      }}>Remove from cart
    </S.ButtonActiveStyle>
  );
}

export function Button({ beerId, classB }) {
  const dispatch = useDispatch();
  const beer = useSelector(state => state.beers.oneBeer);

  const addLocalStorage = (beerId) => {
    if(!localStorage.getItem("basket")) {
      const basket = {};
      basket[beerId] = {...beer, quantity: 1, price: beer.ibu, isCart: true};
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      const basket = JSON.parse(localStorage.getItem("basket"));
      basket[beerId] = {...beer, quantity: 1, price: beer.ibu, isCart: true};
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  };

  return(
    <S.ButtonStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(addToBasketOneBeer(beerId));
        addLocalStorage(beerId);
      }}>Add to cart
    </S.ButtonStyle>
  );
}
