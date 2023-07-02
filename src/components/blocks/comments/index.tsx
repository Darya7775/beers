import React from "react";
import * as S from "./style";

interface Props {
  comments: {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }[];
};

const Comments: React.FC<Props> = (props: Props) => {

  return(
    <S.CommentsStyle>
      <S.CommentsTitle>Reviews</S.CommentsTitle>
      <S.CommentsList>
        {props.comments.length ? props.comments.map((comment, index) => (
          <li key={index}>
            <h3>{comment.email.split('@')[0]}</h3>
            <p>{comment.body}</p>
          </li>
        ))
        : <li>No comments</li>}
      </S.CommentsList>
    </S.CommentsStyle>
  );
};

export default Comments;
