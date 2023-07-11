import React from "react";
import useTranslate from "../../../hooks/use-translate";
import * as S from "./style";

const Footer: React.FC = () => {
  const {t} = useTranslate();

  return(
    <S.FooterStyle>
      <S.ContainerFooter>
        <p>{t("footer.copyright")} @D.Stolyarova</p>
      </S.ContainerFooter>
    </S.FooterStyle>
  );
}

export default Footer;
