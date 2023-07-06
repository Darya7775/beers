import React from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import { removeProduct } from "../../../features/basket-slice";
import { selectBeerById, addToBasket, removeFromBasket } from "../../../features/beers-slice";
import * as S from "./style";

interface Props {
  beerId: number,
  classB?: string
}

export const ButtonActive: React.FC<Props> = ({ beerId, classB }: Props) => {
  const dispatch = useAppDispatch();
  return(
    <S.ButtonActiveStyle
      className={classB}
      type="button"
      onClick={() => {
        dispatch(removeFromBasket(beerId));
        dispatch(removeProduct(beerId));
        const basket = JSON.parse(localStorage.getItem("basket") as string);
        delete basket[beerId];
        localStorage.setItem("basket", JSON.stringify(basket));// вынести в функцию
      }}>Remove from cart
    </S.ButtonActiveStyle>
  );
}

interface Options {
  [key: string]: object
};

interface Beer {
  image_url: string,
  name: string,
  isCart: boolean,
  abv: number,
  ibu: number
}

export const Button: React.FC<Props> = ({ beerId, classB }: Props) => {
  const dispatch = useAppDispatch();
  const beer = useAppSelector(state => selectBeerById(state, beerId)) as Beer;

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
        dispatch(addToBasket(beerId));
        addLocalStorage(beerId);
      }}>Add to cart
    </S.ButtonStyle>
  );
}
