import React, { useCallback, useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import useAppDispatch from "../../../hooks/use-dispatch";
import useAppSelector from "../../../hooks/use-selector";
import useTranslate from "../../../hooks/use-translate";
import { fetchOneBeers } from "../../../features/beers-slice";
import { fetchComments, addComment, Comment } from "../../../features/comments-slice";
import Beer from "../../containers/beer";
import Comments from "../../blocks/comments";
import Spinner from "../../ui/spinner";
import type { RootState } from '../../../store';

const getComments = (state: RootState) => state.comments.comments;

const OneBeer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const {t, lang} = useTranslate();

  const [ name, setName ] = useState("");
  const [ text, setText ] = useState("");

  console.log("onebeer")

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchOneBeers(id));
      await dispatch(fetchComments(id));
      console.log('Effect OneBeer')
    }
    fetchData();
  }, [lang]);

  const comments = useAppSelector(getComments);

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
      <Beer t={t} beerId={Number(id)}/>
      <Suspense fallback={<Spinner text="Loading..." />}>
        <Comments comments={comments} name={name} text={text} onChangeName={callbacks.onChangeName} onChangeText={callbacks.onChangeText} onSubmit={callbacks.onSubmit} />
      </Suspense>
    </>
  );
}

export default OneBeer;
