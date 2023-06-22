import React from "react";
import * as S from "./style";

function Form(props) {
  return(
    <S.FormStyle action={props.action} method={props.method} onSubmit={props.onSubmit}>
      <S.FormContainer>
        {props.children}
        <S.FormButton type="submit">{props.textButton}</S.FormButton>
      </S.FormContainer>
    </S.FormStyle>
  );
}

export default Form;
