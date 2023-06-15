import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneBeers } from "/src/features/beersSlice";
import Beer from "/src/components/blocks/beer";

function OneBeer() {
  const dispatch = useDispatch();
  const activeUrl = useParams();

  const status = useSelector(state => state.beers.oneBeerStatus);
  const error = useSelector(state => state.beers.error);
  const beer = useSelector(state => state.beers.oneBeer);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchOneBeers(activeUrl.id));
      console.log('Effect OneBeer')
    }
    fetchData();
  }, []);

  return(
    <Beer status={status} error={error} beerId={activeUrl.id} beer={beer}/>
  );
}

export default OneBeer;
