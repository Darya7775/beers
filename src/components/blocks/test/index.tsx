import React from "react";
import useTranslate from "../../../hooks/use-translate";
import * as S from "./style";

const Test: React.FC = () => {
  const {t} = useTranslate();
  return(
    <S.TestContainer>
      {t("test.forTheTest")}
      <div>{t("login")}: test_1</div>
      <div>{t("password")}: 123456</div>
      {t("test.text")}
    </S.TestContainer>
  );
}

export default Test;
