import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title, Inter500 } from "/src/style/mixins";

export const LinkBeer = styled(Link)`
  display: grid;
  justify-items: center;
  gap: 20px;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover h2 {
    text-decoration: solid underline ${(props) => props.theme.colorActiveLink} 2px;
  }

  @media(max-width: 63.94em) {
    gap: 0;
  }
`;

export const ImgStyle = styled.img`
  object-fit: contain;
  transition: transform .35s ease-out;

  margin: 10px;
`;

export const BeerTitle = styled.h2`
  ${Title};
`;

export const BeerAlc = styled.span`
  font-size: 1.5em;
  color: ${props => props.theme.colorBlack};

  @media(max-width: 63.94em) {
    font-size: 1em;
  }

  @media(max-width: 47.94em) {
    font-size: 0.8em;
  }
`;

export const BeerPrice = styled.span`
  ${Inter500};
  font-size: 2em;
  color: ${props => props.theme.colorBlack};
  margin-bottom: 20px;

  @media(max-width: 63.94em) {
    font-size: 1em;
    margin-bottom: 10px;
  }

  @media(max-width: 47.94em) {
    font-size: 0.8em;
    margin-bottom: 5px;
  }
`;
