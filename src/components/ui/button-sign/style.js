import styled from "styled-components";

export const StyleButton = styled.button`
  padding: 6px;
  border: 1px solid #0b3dcb;
  border-radius: 5px;
  background-color: #ffffff;

  color: #0b3dcb;
  font-size: 18px;

  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.6;
  }

  @media(max-width: 47.94em) {
      &:hover {
      opacity: 1;
    }
  }
`;
