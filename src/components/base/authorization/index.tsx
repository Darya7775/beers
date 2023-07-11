import React, { useCallback } from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import useTranslate from "../../../hooks/use-translate";
import { fetchSignOut } from "../../../features/session-slice";
import * as S from "./styled";

const Authorization: React.FC = () => {

  const dispatch = useAppDispatch();
  const {t}= useTranslate();

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
    <div>
      {select.authorization ?
        <S.Wrapper>
          <S.AutLink to={"/profile"}>{select.name}</S.AutLink>
          <S.AutButton type="button" onClick={callbacks.singOut}>{t("authorization.singOut")}</S.AutButton>
        </S.Wrapper>
        : <S.AutLinkSingIn to={"/login"}>{t("authorization.signIn")}</S.AutLinkSingIn>}
    </div>
  );
}

export default Authorization;
