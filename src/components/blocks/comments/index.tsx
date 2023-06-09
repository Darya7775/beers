import React from "react";
import useTranslate from "../../../hooks/use-translate";
import Form from "../form";
import InputLogin from "../../ui/input-login";
import Textarea from "../../ui/textarea";
import { Comment } from "../../../features/comments-slice";
import * as S from "./style";

interface Props {
  comments: Comment[];
  name: string,
  text: string,
  onChangeName: (value: string) => void,
  onChangeText: (value: string) => void,
  onSubmit: (e: React.SyntheticEvent) => void
};

const Comments: React.FC<Props> = (props: Props) => {
  const {t} = useTranslate();
  console.log("comments")

  return(
    <S.CommentsStyle>
      <S.CommentsTitle>{t("comments.title")}</S.CommentsTitle>
      <S.CommentsList>
        {props.comments.length
          ? props.comments.map((comment, index) => (
              <S.CommentsItem key={index}>
                <h3>{comment.email.split('@')[0]}</h3>
                <p>{comment.body}</p>
              </S.CommentsItem>
            ))
          : <li>{t("comments.noReviews")}</li>}
      </S.CommentsList>
      <Form onSubmit={props.onSubmit} textButton={t("comments.send")}>
        <>
          <h2>{t("comments.leaveFeedback")}</h2>
          <InputLogin type="text" value={props.name} text={t("comments.name")} onChange={props.onChangeName}/>
          <Textarea value={props.text} onChangeText={props.onChangeText} placeholder={t("comments.text")} />
        </>
      </Form>
    </S.CommentsStyle>
  );
};

export default Comments;
