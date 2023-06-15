import { css } from "styled-components";

export const PermanentMarker400 = css`
  font-family: ${props => props.theme.ffPermanentMarker};
  font-style: normal;
  font-weight: 400;
`;

export const Inter400 = css`
  font-family: ${props => props.theme.ffInter};
  font-style: normal;
  font-weight: 400;
`;

export const Inter500 = css`
  font-family: ${props => props.theme.ffInter};
  font-style: normal;
  font-weight: 500;
`;

export const Inter900 = css`
  font-family: ${props => props.theme.ffInter};
  font-style: normal;
  font-weight: 900;
`;

export const Title = css`
  margin: 0;

  ${Inter900};
  font-size: 2em;
  line-height: 115%;
  text-align: center;
  color: #ee5c07;

  @media(max-width: 63.94em) {
    font-size: 1.5em;
  }

  @media(max-width: 47.94em) {
    font-size: 1.1em;
  }
`;

export const buttonS = css`
  font-size: 1.5em;
  line-height: 150%;
  display: block;
  width: 100%;
  padding: 20px;
  text-align: center;
  border: none;
  border-radius: 5px;

  align-self: end;

  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 89.94em) {
    padding: 15px;
  }

  @media(max-width: 63.94em) {
    padding: 10px;
    font-size: 1em;
  }

  @media(max-width: 47.94em) {
    padding: 7px;
    font-size: 0.7em;
  }
`;
