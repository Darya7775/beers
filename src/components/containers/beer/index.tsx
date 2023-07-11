import React from "react";
import Spinner from "../../ui/spinner";
import useAppSelector from "../../../hooks/use-selector";
import { ButtonActive, Button } from "../../ui/button-beer";
import type { RootState } from '../../../store';
import * as S from "./style";

interface Props {
  beerId: number,
  t: (value: string) => any
}

const getStatus = (state: RootState) => state.beers.oneBeerStatus;
const getBeer = (state: RootState) => state.beers.oneBeer;
const getError = (state: RootState) => state.beers.error;

const Beer: React.FC<Props> = (props: Props) => {

  const status = useAppSelector(getStatus);
  const error = useAppSelector(getError);
  const beer = useAppSelector(getBeer);

  let content;

  console.log("onebeer")

  if(status === "loading") {
    content = <Spinner text="Loading..." />
  } else if(status === "succeeded") {
    content = <>
                <S.PageBeerImg src={beer.image_url} alt={beer.name} width={75} height={200}/>
                <S.PageBeerTitle>{beer.name}</S.PageBeerTitle>
                <span>{props.t("alcohol")}: {beer.abv} %</span>
                <span>{props.t("beer.dateOfFirstBrew")}: {beer.first_brewed}</span>
                <S.PageBeerText>{beer.description}</S.PageBeerText>
                <S.PageBeerSubtutle>{props.t("beer.ingredients")}:</S.PageBeerSubtutle>
                <S.PageBeerListIngredients>
                  <li>{props.t("beer.malt")}: {beer.ingredients.malt[0].name}</li>
                  <li>{props.t("beer.hops")}: {beer.ingredients.hops[0].name}</li>
                  <li>{props.t("beer.yeast")}: {beer.ingredients.yeast}</li>
                </S.PageBeerListIngredients>
                {beer.isCart ? <ButtonActive classB="button" beerId={props.beerId}/> : <Button classB="button" beerId={props.beerId} />}
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
