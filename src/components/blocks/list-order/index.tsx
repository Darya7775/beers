import React from "react";
import useTranslate from "../../../hooks/use-translate";
import * as S from "./style";

interface Props {
  beers: {
    price: number,
    name: string,
    quantity: number
  }[]
};

const ListOrder: React.FC<Props> = (props: Props) => {
  const {t} = useTranslate();
  let total = 0;
  return(
    <>
      <h3>{t("listOrder.title")}</h3>
      <S.WrapTitle>
        <h4>{t("listOrder.beer")}</h4>
        <h4>{t("quantity")}</h4>
        <h4>{t("price")}</h4>
      </S.WrapTitle>
      <S.ListOrderBeers>
        {props.beers.map((beer, index) => {
          total += beer.price;
          return(
            <S.ListOrderItem key={index}>
              <h3>{beer.name}</h3>
              <span>{beer.quantity}</span>
              <span>{beer.price} $</span>
            </S.ListOrderItem>
          );
        })}
      </S.ListOrderBeers>
      <S.WrapPrice>
        <span>{t("total")}:</span>
        <span>{total}$</span>
      </S.WrapPrice>
    </>
  );
}

export default ListOrder;
