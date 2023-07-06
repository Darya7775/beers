import React from "react";
import * as S from "./style";

const Test: React.FC = () => {
  return(
    <S.TestContainer>
      For the test
      <div>Login: test_1</div>
      <div>Password: 123456</div>
      does not work in github pages, only locally
    </S.TestContainer>
  );
}

export default Test;
