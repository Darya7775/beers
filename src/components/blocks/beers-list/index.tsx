import React from "react";
import Spinner from "../../ui/spinner";
import CardBeer from "../../containers/card-beer";
import * as S from "./style";

interface Props {
  error: string | undefined,
  status: string,
  beersIds: number[]
}

const BeersList: React.FC<Props>= (props: Props) => {

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
