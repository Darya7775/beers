import React from "react";
import Spinner from "../../ui/spinner";
import { ButtonActive, Button } from "../../ui/button-beer";
import * as S from "./style";

interface Props {
  beer: {
    isCart: boolean,
    image_url: string,
    name: string,
    abv: number,
    first_brewed: string,
    description: string,
    ingredients: {
      malt: {name: string}[],
      hops: {name: string}[],
      yeast: string
    }
  },
  error: string | undefined,
  status: string,
  beerId: number
}

const Beer: React.FC<Props> = (props: Props) => {

  let content;

  if(props.status === "loading") {
    content = <Spinner text="Loading..." />
  } else if(props.status === "succeeded") {
    content = <>
                <S.PageBeerImg src={props.beer.image_url} alt={props.beer.name} width={75} height={200}/>
                <S.PageBeerTitle>{props.beer.name}</S.PageBeerTitle>
                <span>Alc.: {props.beer.abv} %</span>
                <span>Date of first brew: {props.beer.first_brewed}</span>
                <S.PageBeerText>{props.beer.description}</S.PageBeerText>
                <S.PageBeerSubtutle>Ingredients:</S.PageBeerSubtutle>
                <S.PageBeerListIngredients>
                  <li>Malt: {props.beer.ingredients.malt[0].name}</li>
                  <li>Hops: {props.beer.ingredients.hops[0].name}</li>
                  <li>Yeast: {props.beer.ingredients.yeast}</li>
                </S.PageBeerListIngredients>
                {props.beer.isCart ? <ButtonActive classB="button" beerId={props.beerId}/> : <Button classB="button" beerId={props.beerId} />}
              </>
  } else if(props.status === "failed") {
    content = <div>{props.error}</div>
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
