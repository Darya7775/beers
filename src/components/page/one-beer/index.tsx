import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../../hooks/use-dispatch";
import useAppSelector from "../../../hooks/use-selector";
import { fetchOneBeers } from "../../../features/beers-slice";
import { fetchComments } from "../../../features/comments-slice";
import Beer from "../../blocks/beer";
import Comments from "../../blocks/comments";

const OneBeer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchOneBeers(id));
      await dispatch(fetchComments(id));
      console.log('Effect OneBeer')
    }
    fetchData();
  }, []);

  const select = useAppSelector(state => ({
    status: state.beers.oneBeerStatus,
    error: state.beers.error,
    beer: state.beers.oneBeer,
    comments: state.comments.comments
  }));

  return(
    <>
      <Beer status={select.status} error={select.error} beerId={id} beer={select.beer}/>
      <Comments comments={select.comments} />
    </>
  );
}

export default OneBeer;
