import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeers, selectBeerIds } from "/src/features/beersSlice";
import Spinner from "/src/components/ui/spinner/Spinner";
import CardBeer from "/src/components/blocks/card_beer/CardBeer";

function BeersList() {
  const dispatch = useDispatch();
  const beersIds = useSelector(selectBeerIds);

  console.log(beersIds);

  const status = useSelector(state => state.beers.status);
  const error = useSelector(state => state.beers.error);

  console.log(status);

  useEffect(() => {
    if(status === "idle") {
      dispatch(fetchBeers());
      console.log("Loading eff");
    }
  }, [status]);

  let content;

  if(status === "loading") {
    content = <Spinner text="Loading..." />
  } else if(status === "succeeded") {
    content = beersIds.map(beerId => (
      <CardBeer key={beerId} beerId={beerId} />
    ));
  } else if(status === "failed") {
    content = <div>{error}</div>
  }

  return(
    <ul>
      {content}
    </ul>
  );
}

export default BeersList;
