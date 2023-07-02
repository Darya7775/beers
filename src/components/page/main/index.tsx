import React from "react";
import useInit from "../../../hooks/use-init";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import { fetchBeers, selectBeerIds } from "../../../features/beers-slice";
import { addCurrentPage } from "../../../features/beers-slice";
import BeersList from "../../blocks/beers-list";
import Pagination from "../../blocks/pagination";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    beersIds: selectBeerIds(state),
    status: state.beers.status,
    error: state.beers.error,
    count: state.beers.count
  }));

  const page = window.location.hash;
  const number = page.split('_')[1];

  useInit(async () => {
    await dispatch(fetchBeers(number));
    console.log("ef main");
  }, [number]);

  return (
    <>
      <BeersList status={select.status} beersIds={select.beersIds} error={select.error} />
      <Pagination currentPage={Number(number)} count={select.count} onhandler={(number: number) => dispatch(addCurrentPage(number))}/>
    </>
  );
}

export default Main;
