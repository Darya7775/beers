import React, { useState } from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import useTranslate from "../../../hooks/use-translate";
import { removeFromBasket } from "../../../features/beers-slice";
import { incrementBeers, decrementBeers, updatePrice, removeProduct, selectBeerBasketById } from "../../../features/basket-slice";
import * as S from "./style";

interface Props {
  beerId: number,
  handler: () => void
};

interface Beer {
  id: number,
  image_url: string,
  name: string,
  isCart: boolean,
  abv: number,
  ibu: number,
  quantity: number,
  price: number
}

const CardBeerBasket: React.FC<Props> = (props: Props) => {
  const {t} = useTranslate();
  const dispatch = useAppDispatch();
  const beer = useAppSelector(state => selectBeerBasketById(state, props.beerId)) as Beer;

  let [ quantity, setQuantity ] = useState(beer.quantity);

  const decrement = () => {
    if(quantity === 1){
      setQuantity(quantity);
    } else {
      setQuantity(--quantity);
    }
  };

  // изменение количества
  const updateQuantityLocalStorage = (beerId: number) => {
    const basket = JSON.parse(localStorage.getItem("basket") as string);
    // находим пиво
    const beer = basket[beerId];
    // обновляем количество
    beer.quantity = quantity;
    // обновляем цену
    beer.price = quantity * beer.ibu;
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return(
    <S.CardBeerItem>
      <S.CardBeerImg src={beer.image_url} alt={beer.name} width={75} height={200}/>
      <S.CardBeerTitle>{beer.name}</S.CardBeerTitle>
      <S.CardBeerAlc>{t("alcohol")}: {beer.abv} %</S.CardBeerAlc>
      <S.CardBeerWparCount>
        <S.CardBeerTitleCount>{t("quantity")}</S.CardBeerTitleCount>
        <S.CardBeerWparButtons>
          <S.CardBeerButton
            type="button"
            onClick={() => {
              decrement();
              dispatch(decrementBeers(props.beerId));
              dispatch(updatePrice({id: props.beerId, price: quantity * beer.ibu}));
              updateQuantityLocalStorage(props.beerId);
            }}
          >-</S.CardBeerButton>
          <span>{beer.quantity}</span>
          <S.CardBeerButton
            type="button"
            onClick={() => {
              setQuantity(++quantity);
              dispatch(incrementBeers(props.beerId));
              dispatch(updatePrice({id: props.beerId, price: quantity * beer.ibu}));
              updateQuantityLocalStorage(props.beerId);
            }}
          >+</S.CardBeerButton>
        </S.CardBeerWparButtons>
      </S.CardBeerWparCount>
      <S.CardBeerPrice>{t("price")}: {beer.price}$</S.CardBeerPrice>
      <S.CardBeerDelete type="button" aria-label="Delete"
        onClick={() => {
          dispatch(removeFromBasket(beer.id));
          dispatch(removeProduct(beer.id));
          props.handler();
          const basket = JSON.parse(localStorage.getItem("basket") as string);
          delete basket[props.beerId];
          localStorage.setItem("basket", JSON.stringify(basket)); // вынести в функцию
        }}>
      </S.CardBeerDelete>
    </S.CardBeerItem>
  );
}

export default CardBeerBasket;
