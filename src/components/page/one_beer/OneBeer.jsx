import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBeerById } from "/src/features/beersSlice";
import { ButtonActive, Button } from "/src/components/ui/button/Button";
import * as S from "./style";

function OneBeer() {
  const activeUrl = useParams();
  const beer = useSelector(state => selectBeerById(state, activeUrl.id));

  let button;

  if(beer.isCart === true) {
    button = <ButtonActive classB="button" beerId={activeUrl.id}/>
  } else {
    button = <Button classB="button" beerId={activeUrl.id} />
  }

  return(
    <S.PageBeerStyle>
      <S.PageBeerContainer>
        <S.PageBeerImg src={beer.image_url} alt={beer.name} width={75} height={200}/>
        <S.PageBeerTitle>{beer.name}</S.PageBeerTitle>
        <span>Alc.: {beer.abv} %</span>
        <span>Date of first brew: {beer.first_brewed}</span>
        <S.PageBeerText>{beer.description}</S.PageBeerText>
        <S.PageBeerSubtutle>Ingredients:</S.PageBeerSubtutle>
        <S.PageBeerListIngredients>
          <li>Malt: {beer.ingredients.malt[0].name}</li>
          <li>Hops: {beer.ingredients.hops[0].name}</li>
          <li>Yeast: {beer.ingredients.yeast}</li>
        </S.PageBeerListIngredients>
        {button}
      </S.PageBeerContainer>
    </S.PageBeerStyle>
  );
}

export default OneBeer;
