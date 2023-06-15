import styled from "styled-components";
import { Title, Inter500 } from "/src/style/mixins";
import close from "/src/assets/icon-close.svg";

export const CardBeerItem = styled.li`
  display: grid;
  justify-items: center;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto auto;

  box-shadow: 0 0 16px #a0e198;
  padding: 10px;

  position: relative;

  @media(max-width: 47.94em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardBeerImg = styled.img`
  grid-area: 1/1/-1/2;
  object-fit: contain;
`;

export const CardBeerTitle = styled.h2`
  ${Title};

  grid-area: 1/2/2/3;
`;

export const CardBeerAlc = styled.span`
  grid-area: 2/2/3/3;
  font-size: 1.4em;

  @media(max-width: 63.94em) {
    font-size: 1em;
  }

  @media(max-width: 47.94em) {
    font-size: 0.8em;
  }
`;

export const CardBeerPrice = styled.span`
  grid-area: 3/2/4/3;
  font-size: 1.7em;

  @media(max-width: 63.94em) {
    font-size: 1.3em;
  }

  @media(max-width: 47.94em) {
    font-size: 1em;
  }
`;

export const CardBeerWparCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  grid-area: 3/3/4/-1;

  @media(max-width: 47.94em) {
    width: 100%;
  }
`;

export const CardBeerTitleCount = styled.h3`
  margin: 0;

  ${Inter500};
`;

export const CardBeerWparButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media(max-width: 47.94em) {
    gap: 10px;
  }
`;

export const CardBeerButton = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  padding: 0 5px;
  border: 1px solid #2fb607;
  border-radius: 5px;
  background-color: ${props => props.theme.colorWhite};

  color: #2fb607;
  font-size: 1.5em;

  cursor: pointer;
  user-select: none;

  &:hover {
    color: #61ee37;
  }
`;

export const CardBeerDelete = styled.button`
  display: block;
  width: 30px;
  height: 30px;

  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.theme.colorWhite};
  border: 1px solid #e61212;


  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #f6c3c3;
  }
`;
