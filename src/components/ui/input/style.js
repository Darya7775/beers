import styled, { css } from "styled-components";

const StyleValidation = css`
  .valid {
    border: 2px solid green;
  }

  .inValid {
    border: 2px solid red;
  }
`;

export const WrapInput = styled.div`
  ${StyleValidation};
`;

export const InputStyle = styled.input`
  width: 50%;
  padding: 10px;

  border: none;
  border-bottom: 2px solid #1a77d2;

  @media(max-width: 47.94em) {
    width: 100%;
    padding: 5px;
  }
`;
