import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBeerBasket from "/src/components/blocks/card-beer-basket";
import { deletingAllFromTheBasket } from "/src/features/beersSlice";
import { addProducts, selectBeerBasketIds, clearBasket } from "/src/features/basketSlice";
import * as S from "./style";

function Basket() {
  const dispatch = useDispatch();
  const beersStore = useSelector(selectBeerBasketIds);
  console.log("basket")
  const [ count, setCount ] = useState('');

  useEffect(() => {
    let beersBasket = [];
    if(localStorage.getItem("basket")) {
      // парсим корзину, создаем массив объектов-значений, добавляем каждому цену
      beersBasket = Object.values(JSON.parse(localStorage.getItem("basket"))).map(beer => ({...beer, price: beer.ibu * beer.quantity}));
      dispatch(addProducts(beersBasket)); // переделать localstore перенести в redux
      console.log('Effect Basket')
    }
    setCount(beersStore.length);
  }, [beersStore]);

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
                    localStorage.removeItem("basket");
                    dispatch(deletingAllFromTheBasket(beersStore));
                    dispatch(clearBasket());
                    setCount(beersStore.length);
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


