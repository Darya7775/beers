import React from "react";
import basket from "/src/assets/basket.svg";
import * as S from "./style";

function Header() {

  return (
    <S.HeaderStyle>
      <S.HeaderContainer>
        <S.LinkLogo to="/">Beer</S.LinkLogo>
        <S.LinkCart to="/basket">
          <img src={basket} alt="basket" width={40} height={40} />
        </S.LinkCart>
      </S.HeaderContainer>
    </S.HeaderStyle>
  );
}

export default Header;
