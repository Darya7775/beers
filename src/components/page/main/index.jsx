import React from "react";
import useInit from "/src/hooks/use-init";
import { fetchBeers } from "/src/features/beersSlice";
import BeersList from "/src/components/blocks/beers-list";
import Pagination from "../../blocks/pagination";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPage } from "/src/features/beersSlice";

function Main() {
  const dispatch = useDispatch();

  const select = useSelector(state => ({
    beersIds: state.beers.ids,
    status: state.beers.status,
    error: state.beers.error,
    count: state.beers.count
  }));

  const page = window.location.hash;
  const number = page.split('_')[1];

  useInit(async () => {
    await dispatch(fetchBeers(Number(number)))
    console.log("ef main")
  }, [number]);

  return (
    <>
      <BeersList status={select.status} beersIds={select.beersIds} error={select.error} />
      <Pagination currentPage={Number(number)} count={select.count} onhandler={(number) => dispatch(addCurrentPage(number))}/>
    </>
  );
}

export default Main;

// "main": "index.js", -
