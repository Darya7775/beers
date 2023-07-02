import React from "react";
const basket = require("../../../assets/basket.svg") as string;
import * as S from "./style";

const Header: React.FC = () => {
  return (
    <S.HeaderStyle>
      <S.HeaderContainer>
        <S.LinkLogo to={"/"}>Beer</S.LinkLogo>
        <S.LinkCart to={"/basket"}>
          <img src={basket} alt="basket" width={40} height={40} />
        </S.LinkCart>
      </S.HeaderContainer>
    </S.HeaderStyle>
  );
}

export default Header;
