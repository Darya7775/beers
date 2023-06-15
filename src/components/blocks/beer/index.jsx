import React from "react";
import Spinner from "/src/components/ui/spinner";
import { ButtonActive, Button } from "/src/components/ui/button-beer";
import * as S from "./style";

function Beer({beer, beerId, status, error}) {

  let content;
  if(status === "loading") {
    content = <Spinner text="Loading..." />
  } else if(status === "succeeded") {
    content = <>
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
                {beer.isCart ? <ButtonActive classB="button" beerId={beerId}/> : <Button classB="button" beerId={beerId} />}
              </>
  } else if(status === "failed") {
    content = <div>{error}</div>
  }

  return(
    <S.PageBeerStyle>
      <S.PageBeerContainer>
        {content}
      </S.PageBeerContainer>
    </S.PageBeerStyle>
  );
}

export default Beer;
