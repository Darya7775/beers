import React from "react";
import useTranslate from "../../../hooks/use-translate";
import * as S from "./style";

interface Props {
  name: string,
  email: string,
  telephone: string
};

const ProfileCard: React.FC<Props> = (props: Props) => {
  const {t} = useTranslate();
  return(
    <S.ProfileSection>
      <S.ProfileContainer>
        <S.ProfileTitle>{t("profile.title")}</S.ProfileTitle>
        <div>
          <S.Text>{t("profile.name")}: </S.Text>
          {props.name}
        </div>
        <div>
          <S.Text>{t("profile.eMail")}: </S.Text>
          {props.email}
        </div>
        <div>
          <S.Text>{t("profile.telephone")}: </S.Text>
          {props.telephone}
        </div>
      </S.ProfileContainer>
    </S.ProfileSection>
  );
}

export default ProfileCard;
