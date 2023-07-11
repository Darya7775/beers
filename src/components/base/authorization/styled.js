import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  @media(max-width: 63.94em) {
    font-size: 14px;
  }
`;

export const AutLink = styled(Link)`
  background-color: #33cf49;
  padding: 0px 6px;
  border-radius: 5px;

  color: #ffffff;
  font-weight: 500;

  &:hover {
    opacity: 0.6;
  }

  @media(max-width: 47.94em) {
      &:hover {
      opacity: 1;
    }
  }
`;

export const AutButton = styled.button`
  background-color: #ffffff;
  padding: 0px 6px;
  border: 1px solid #ef1616;
  border-radius: 5px;

  color: #ef1616;
  font-size: 14px;

  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.6;
  }

  @media(max-width: 47.94em) {
    font-size: 12px;
      &:hover {
      opacity: 1;
    }
  }
`;

export const AutLinkSingIn = styled(Link)`
  padding: 0px 6px;
  border: 1px solid #0b3dcb;
  border-radius: 5px;

  color: #0b3dcb;
  font-size: 14px;

  &:hover {
    opacity: 0.6;
  }

  @media(max-width: 47.94em) {
      &:hover {
      opacity: 1;
    }
  }
`;
