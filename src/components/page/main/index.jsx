import React, {useEffect} from "react";
import { fetchBeers, selectBeerIds } from "/src/features/beersSlice";
import BeersList from "/src/components/blocks/beers-list";
import Pagination from "../../blocks/pagination";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPage } from "/src/features/beersSlice";

function Main() {
  const dispatch = useDispatch();

  const beersIds = useSelector(selectBeerIds);

  const currentPage = useSelector(state => state.beers.currentPage);
  const status = useSelector(state => state.beers.status);
  const error = useSelector(state => state.beers.error);

  const page = window.location.hash;
  const number = page.split('_')[1];

  useEffect(() => {
    async function fetchData() {
      await dispatch(addCurrentPage(Number(number)));
      if(currentPage === null) {
        await dispatch(fetchBeers(Number(number)));
      } else {
        await dispatch(fetchBeers(currentPage));
      }
      console.log('Effect main')
    }
    fetchData();
  }, [currentPage]);

  const count = useSelector(state => state.beers.count);


  return (
    <>
      <BeersList status={status} beersIds={beersIds} error={error} />
      <Pagination currentPage={currentPage} count={count} onhandler={(number) => dispatch(addCurrentPage(number))}/>
    </>
  );
}

export default Main;
