import React from "react";
import * as S from "./style";

function ProfileCard(props) {
  return(
    <S.ProfileSection>
      <S.ProfileContainer>
        <S.ProfileTitle>Profile</S.ProfileTitle>
        <div>
          <S.Text>Name: </S.Text>
          {props.name}
        </div>
        <div>
          <S.Text>E-mail: </S.Text>
          {props.email}
        </div>
        <div>
          <S.Text>Telephone: </S.Text>
          {props.telephone}
        </div>
      </S.ProfileContainer>
    </S.ProfileSection>
  );
}

export default ProfileCard;
