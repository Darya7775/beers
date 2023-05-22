import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardBeerBasket from "/src/components/blocks/card_beer_basket/CardBeerBasket";
import { deletingAllFromTheBasket } from "/src/features/beersSlice";
import { addProducts, selectBeerBasketIds, clearBasket } from "/src/features/basketSlice";
import * as S from "./style";

function Basket() {
  const dispatch = useDispatch();
  const beersStore = useSelector(selectBeerBasketIds);
  const [ count, setCount ] = useState(localStorage.length);

  const getBeersBasket = () => {

    const beersBasket = [];

    if(localStorage.length !== beersStore.length) {
      for(let i = 0; i < localStorage.length; i++) {
        const idBeer = localStorage.key(i);
        const beer = JSON.parse(localStorage.getItem(idBeer));
        beersBasket.push({id: beer.id, name: beer.name, quantity: beer.quantity, price: beer.ibu * beer.quantity, image_url: beer.image_url, ibu: beer.ibu, abv: beer.abv});
      }
      dispatch(addProducts(beersBasket));
    }
  };

  getBeersBasket();

  return(
    <S.BasketStyle>
      <S.BasketContainer>
        <S.BasketTotal>Total {count}</S.BasketTotal>
          {beersStore.length ?
            <>
              <S.BasketListStyle>
                {beersStore.map((beer, index) => {
                  return(
                    <CardBeerBasket key={index} beerId={beer} handler={() => setCount(count -1)} />
                  );
                })}
              </S.BasketListStyle>
              <S.WrapButtons>
                <S.ButtonClear
                  type="button"
                  onClick={() => {
                    localStorage.clear();
                    dispatch(deletingAllFromTheBasket(beersStore));
                    dispatch(clearBasket());
                    setCount(localStorage.length);
                  }}>
                  Clear basket
                </S.ButtonClear>
                <S.LinkForm to="/form">Checkout</S.LinkForm>
              </S.WrapButtons>
            </>
            :
              <p>
                Сart is empty!
              </p>
          }
      </S.BasketContainer>
    </S.BasketStyle>
  );
}

export default Basket;


