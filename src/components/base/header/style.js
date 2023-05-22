import styled from "styled-components";
import Container  from "/src/components/ui/container/Container";
import { Link } from "react-router-dom";
import { PermanentMarker400 } from "/src/style/mixins";

export const HeaderStyle = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.colorWhite};
  box-shadow: 0px 6px 18px 0px #d5d1ea;
`;

export const HeaderContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 63.94em) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const LinkLogo = styled(Link)`
  ${PermanentMarker400};
  font-size: 1.5em;
  color: #817abf;

  &:hover {
    opacity: 0.5;
  }
`;

export const LinkCart = styled(Link)`
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #c1bde2;
  }
`;
