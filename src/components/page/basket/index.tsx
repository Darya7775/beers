import React, { useEffect, useState } from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import useTranslate from "../../../hooks/use-translate";
import CardBeerBasket from "../../containers/card-beer-basket";
import { deletingAllFromTheBasket } from "../../../features/beers-slice";
import { addProducts, clearBasket } from "../../../features/basket-slice";
import * as S from "./style";

interface Options {
  [key: string]: {
    ibu: number,
    quantity: number
  }
};

interface Beer {
  price: number,
};

const Basket: React.FC = () => {
  const {t} = useTranslate();
  const dispatch = useAppDispatch();
  const beersStore = useAppSelector(state => state.basket.ids);
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    if(localStorage.getItem("basket")) {
      // парсим корзину, создаем массив объектов-значений, добавляем каждому цену
      const parse = JSON.parse(localStorage.getItem("basket") as string) as Options;
      const beersBasket = Object.values(parse).map<Beer>((beer) => ({...beer, price: beer.ibu * beer.quantity}));
      dispatch(addProducts(beersBasket)); // переделать localstore перенести в redux
      console.log('Effect Basket')
    }
    setCount(beersStore.length);
  }, [beersStore]);

  return(
    <S.BasketStyle>
      <S.BasketContainer>
        <S.BasketTotal>{t("total")} {count}</S.BasketTotal>
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
                  {t("basket.clearBasket")}
                </S.ButtonClear>
                <S.LinkForm to="/form">{t("basket.checkout")}</S.LinkForm>
              </S.WrapButtons>
            </>
            :
              <p>
                {t("basket.cartIsEmpty")}
              </p>
          }
      </S.BasketContainer>
    </S.BasketStyle>
  );
}

export default Basket;


