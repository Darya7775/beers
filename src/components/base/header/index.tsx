import React from "react";
import basket from "../../../assets/basket.svg";
import useTranslate from "../../../hooks/use-translate";
import * as S from "./style";

const Header: React.FC = () => {
  const {t} = useTranslate();

  return (
    <S.HeaderStyle>
      <S.HeaderContainer>
        <S.LinkLogo to={"/"}>{t("title")}</S.LinkLogo>
        <S.LinkCart to={"/basket"}>
          <img src={basket} alt="basket" width={40} height={40} />
        </S.LinkCart>
      </S.HeaderContainer>
    </S.HeaderStyle>
  );
}

export default Header;
