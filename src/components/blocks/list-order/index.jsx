import React from "react";
import * as S from "./style";

function ListOrder(props) {
  let total = 0;
  return(
    <>
      <h3>Your order</h3>
      <S.WrapTitle>
        <h4>Beer</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
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
        <span>Total:</span>
        <span>{total}$</span>
      </S.WrapPrice>
    </>
  );
}

export default ListOrder;
