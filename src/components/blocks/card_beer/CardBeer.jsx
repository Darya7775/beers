import React from "react";
import { useSelector } from "react-redux";
import { selectBeerById } from "/src/features/beersSlice";
import { ButtonActive, Button } from "/src/components/ui/button/Button";
import * as S from "./style";

function CardBeer({ beerId }) {
  const beer = useSelector(state => selectBeerById(state, beerId));

  let button;

  if(beer.isCart === true) {
    button = <ButtonActive beerId={beerId} />
  } else {
    button = <Button beerId={beerId} />
  }

  return(
    <>
      <S.LinkBeer to={`/beers/${beerId}`}>
        <S.ImgStyle src={beer.image_url} alt={beer.name} width={90} height={200} />
        <S.BeerTitle>{beer.name}</S.BeerTitle>
        <S.BeerAlc>Alc.: {beer.abv} %</S.BeerAlc>
        <S.BeerPrice>Price: {beer.ibu}$</S.BeerPrice>
      </S.LinkBeer>
      {button}
    </>
  );
}

export default CardBeer;
