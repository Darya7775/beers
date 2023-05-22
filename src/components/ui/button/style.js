import styled from "styled-components";
import { buttonS } from "/src/style/mixins";

export const ButtonActiveStyle = styled.button`
  ${buttonS};

  background-color: #549716;
  border: 2px solid #549716;
  color: ${props => props.theme.colorWhite};
`;

export const ButtonStyle = styled.button`
  ${buttonS};

  border: 2px solid #549716;
  background-color: ${props => props.theme.colorWhite};
  color: #549716;
`;
