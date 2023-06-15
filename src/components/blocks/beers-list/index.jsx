import React from "react";
import Spinner from "/src/components/ui/spinner";
import CardBeer from "/src/components/blocks/card-beer";
import * as S from "./style";

function BeersList(props) {

  let content;

  if(props.status === "loading") {
    content = <Spinner text="Loading..." />
  } else if(props.status === "succeeded") {
    content = props.beersIds.map(beerId => (
      <S.BeerItemStyle key={beerId}>
        <CardBeer beerId={beerId} />
      </S.BeerItemStyle>
    ));
  } else if(props.status === "failed") {
    content = <div>{props.error}</div>
  }

  return(
    <S.BeersSectionStyle>
      <S.BeersContainer>
        <S.BeersListStyle>
        {content}
        </S.BeersListStyle>
      </S.BeersContainer>
    </S.BeersSectionStyle>

  );
}

export default BeersList;
