import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneBeers } from "/src/features/beersSlice";
import Beer from "/src/components/blocks/beer";

function OneBeer() {
  const dispatch = useDispatch();
  const activeUrl = useParams();

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchOneBeers(activeUrl.id));
      console.log('Effect OneBeer')
    }
    fetchData();
  }, []);

  const select = useSelector(state => ({
    status: state.beers.oneBeerStatus,
    error: state.beers.error,
    beer: state.beers.oneBeer
  }));

  return(
    <Beer status={select.status} error={select.error} beerId={activeUrl.id} beer={select.beer}/>
  );
}

export default OneBeer;
