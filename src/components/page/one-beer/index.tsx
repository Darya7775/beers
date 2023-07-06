import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../../hooks/use-dispatch";
import useAppSelector from "../../../hooks/use-selector";
import { fetchOneBeers } from "../../../features/beers-slice";
import { fetchComments, addComment, Comment } from "../../../features/comments-slice";
import Beer from "../../blocks/beer";
import Comments from "../../blocks/comments";

const OneBeer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

  const [ name, setName ] = useState("");
  const [ text, setText ] = useState("");

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

  const comment: Comment = {
    postId: Number(id),
    id: Number(id),
    name: name,
    email: `${name}@mail.ru`,
    body: text
  };

  const callbacks = {
    onSubmit: useCallback(async (e: React.SyntheticEvent) => {
      e.preventDefault();
      if(text.trim() && name.trim()) {
        await dispatch(addComment(comment));
        setName("");
        setText("");
      }
    }, [comment]),
    onChangeName: useCallback((value: string) => {
      setName(value);
    }, []),
    onChangeText: useCallback((value: string) => {
      setText(value);
    }, []),
  };

  return(
    <>
      <Beer status={select.status} error={select.error} beerId={Number(id)} beer={select.beer}/>
      <Comments comments={select.comments} name={name} text={text} onChangeName={callbacks.onChangeName} onChangeText={callbacks.onChangeText} onSubmit={callbacks.onSubmit} />
    </>
  );
}

export default OneBeer;
