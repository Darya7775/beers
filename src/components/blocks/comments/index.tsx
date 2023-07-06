import React from "react";
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

  return(
    <S.CommentsStyle>
      <S.CommentsTitle>Reviews</S.CommentsTitle>
      <S.CommentsList>
        {props.comments.length
          ? props.comments.map((comment, index) => (
              <S.CommentsItem key={index}>
                <h3>{comment.email.split('@')[0]}</h3>
                <p>{comment.body}</p>
              </S.CommentsItem>
            ))
          : <li>No comments</li>}
          <Form onSubmit={props.onSubmit} textButton="Send">
            <>
              <h2>Leave feedback</h2>
              <InputLogin type="text" value={props.name} text="Name" onChange={props.onChangeName}/>
              <Textarea value={props.text} onChangeText={props.onChangeText} placeholder="Text" />
            </>
          </Form>
      </S.CommentsList>
    </S.CommentsStyle>
  );
};

export default Comments;
