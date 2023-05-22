import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeers, selectBeerIds } from "/src/features/beersSlice";
import Spinner from "/src/components/ui/spinner/Spinner";
import CardBeer from "/src/components/blocks/card_beer/CardBeer";
import * as S from "./style";

function BeersList() {
  const dispatch = useDispatch();
  const beersIds = useSelector(selectBeerIds);

  const status = useSelector(state => state.beers.status);
  const error = useSelector(state => state.beers.error);

  useEffect(() => {
    if(status === "idle") {
      dispatch(fetchBeers());
      console.log("useEffect");
    }
  }, [status]);

  let content;

  if(status === "loading") {
    content = <Spinner text="Loading..." />
  } else if(status === "succeeded") {
    content = beersIds.map(beerId => (
      <S.BeerItemStyle key={beerId}>
        <CardBeer beerId={beerId} />
      </S.BeerItemStyle>
    ));
  } else if(status === "failed") {
    content = <div>{error}</div>
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
