import styled, {css} from "styled-components";
import Container from "/src/components/ui/container";
import { Link } from "react-router-dom";

const itemStyle = css`
  padding: 5px 10px;
  border: 1px #000000 solid;
  border-radius: 5px;
  text-align: center;

  font-size: 1.5em;
  line-height: 150%;

  &:hover {
    opacity: 0.6;
  }

  @media(max-width: 63.94em) {
    font-size: 1em;
  }

  @media(max-width: 47.94em) {
    font-size: 0.9em;
    padding: 2px 7px;
  }
`;

export const PaginationContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 50px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const LinkActivePag = styled(Link)`
  ${itemStyle};

  color: ${props => props.theme.colorWhite};
  background-color: #93eb94;
`;

export const LinkPag = styled(Link)`
  ${itemStyle};

  color: ${props => props.theme.colorBlack};
`;

