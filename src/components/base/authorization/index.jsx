import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignOut } from "/src/features/session-slice";
import * as S from "./styled";

function Authorization() {

  const dispatch = useDispatch();

  const select = useSelector(state => ({
    authorization: state.session.authorization,
    name: state.session.name,
  }));

  const callbacks = {
    singOut: useCallback(() => {
      dispatch(fetchSignOut());
    }, [])
  };

  return(
    <S.AuthorizationContainer>
      {select.authorization ?
        <S.Wrapper>
          <S.AutLink to={"/profile"}>{select.name}</S.AutLink>
          <S.AutButton type="button" onClick={callbacks.singOut}>Sing Out</S.AutButton>
        </S.Wrapper>
        : <S.AutLinkSingIn to={"/login"}>Sign In</S.AutLinkSingIn>}
    </S.AuthorizationContainer>
  );
}

export default Authorization;
