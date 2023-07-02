import React, { useCallback } from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import { fetchSignOut } from "../../../features/session-slice";
import * as S from "./styled";

const Authorization: React.FC = () => {

  const dispatch = useAppDispatch();

  const select = useAppSelector(state => ({
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
