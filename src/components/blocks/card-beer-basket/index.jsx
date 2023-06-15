import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "/src/features/beersSlice";
import { incrementBeers, decrementBeers, updatePrice, removeProduct, selectBeerBasketById } from "/src/features/basketSlice";
import * as S from "./style";

function CardBeerBasket({ beerId, handler }) {
  const dispatch = useDispatch();
  const beer = useSelector(state => selectBeerBasketById(state, beerId));

  let [ quantity, setQuantity ] = useState(beer.quantity);

  const decrement = () => {
    if(quantity === 1){
      setQuantity(quantity);
    } else {
      setQuantity(--quantity);
    }
  };

  const updateQuantityLocalStorage = (beerId) => {
    const beer = JSON.parse(localStorage.getItem(beerId));
    beer.quantity = quantity;
    beer.price = quantity * beer.ibu;
    localStorage.setItem(beerId, JSON.stringify(beer));
  };

  return(
    <S.CardBeerItem>
      <S.CardBeerImg src={beer.image_url} alt={beer.name} width={75} height={200}/>
      <S.CardBeerTitle>{beer.name}</S.CardBeerTitle>
      <S.CardBeerAlc>Alc.: {beer.abv} %</S.CardBeerAlc>
      <S.CardBeerWparCount>
        <S.CardBeerTitleCount>Quantity</S.CardBeerTitleCount>
        <S.CardBeerWparButtons>
          <S.CardBeerButton
            type="button"
            onClick={() => {
              decrement();
              dispatch(decrementBeers(beerId));
              dispatch(updatePrice({id: beerId, price: quantity * beer.ibu}));
              updateQuantityLocalStorage(beerId);
            }}
          >-</S.CardBeerButton>
          <span>{beer.quantity}</span>
          <S.CardBeerButton
            type="button"
            onClick={() => {
              setQuantity(++quantity);
              dispatch(incrementBeers(beerId));
              dispatch(updatePrice({id: beerId, price: quantity * beer.ibu}));
              updateQuantityLocalStorage(beerId);
            }}
          >+</S.CardBeerButton>
        </S.CardBeerWparButtons>
      </S.CardBeerWparCount>
      <S.CardBeerPrice>Price: {beer.price}$</S.CardBeerPrice>
      <S.CardBeerDelete type="button" aria-label="Delete"
        onClick={() => {
          localStorage.removeItem(beer.id);
          dispatch(removeFromBasket(beer.id));
          dispatch(removeProduct(beer.id));
          handler();
        }}>
      </S.CardBeerDelete>
    </S.CardBeerItem>
  );
}

export default CardBeerBasket;
