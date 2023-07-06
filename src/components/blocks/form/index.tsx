import React from "react";
import * as S from "./style";

interface Props {
  children: JSX.Element,
  action?: string,
  method?: string,
  onSubmit: (e: React.SyntheticEvent) => void,
  textButton: string
};

const Form: React.FC<Props> = (props: Props) => {
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
