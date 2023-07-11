import React from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import useTranslate from "../../../hooks/use-translate";
import { removeProduct } from "../../../features/basket-slice";
import { addToBasketOneBeer, removeFromBasketOneBeer } from "../../../features/beers-slice";
import * as S from "./style";

interface Props {
  beerId: number,
  classB?: string
}

export const ButtonActive: React.FC<Props> = ({ beerId, classB }: Props) => {
  const {t} = useTranslate();
  const dispatch = useAppDispatch();
  return(
    <S.ButtonActiveStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(removeFromBasketOneBeer(beerId));
        dispatch(removeProduct(beerId));
        const basket = JSON.parse(localStorage.getItem("basket") as string);
        delete basket[beerId];
        localStorage.setItem("basket", JSON.stringify(basket));// вынести в функцию
      }}>{t("button.removeFromCart")}
    </S.ButtonActiveStyle>
  );
}

interface Options {
  [key: string]: object
};

export const Button: React.FC<Props> = ({ beerId, classB }: Props) => {
  const {t} = useTranslate();
  const dispatch = useAppDispatch();
  const beer = useAppSelector(state => state.beers.oneBeer);

  const addLocalStorage = (beerId: number) => {
    if(!localStorage.getItem("basket")) {
      const basket = {} as Options;
      basket[beerId] = {...beer, quantity: 1, price: beer.ibu, isCart: true};
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      const basket = JSON.parse(localStorage.getItem("basket") as string);
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
      }}>{t("button.addToCart")}
    </S.ButtonStyle>
  );
}
