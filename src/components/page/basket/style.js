import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "/src/components/ui/container/Container";
import { buttonS } from '/src/style/mixins';

export const BasketStyle = styled.section`
  width: 100%;
`;

export const BasketContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 50px;

  display: grid;
  gap: 45px;

  @media(max-width: 63.94em) {
    gap: 25px;

    padding-top: 20px;
    padding-bottom: 30px;
  }

  @media(max-width: 47.94em) {
    gap: 15px;
  }
`;

export const BasketTotal = styled.span`
  font-size: 1.5em;

  @media(max-width: 63.94em) {
    font-size: 1em;

  }
`;

export const BasketListStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  gap: 30px;

  @media(max-width: 89.94em) {
    gap: 25px;
  }

  @media(max-width: 63.94em) {
    gap: 20px;
  }

  @media(max-width: 47.94em) {
    gap: 15px;
  }
`;

export const WrapButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media(max-width: 47.94em) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const ButtonClear = styled.button`
  ${buttonS};

  background-color: #5493ec;
  color: ${props => props.theme.colorWhite};
`;

export const LinkForm = styled(Link)`
  background-color: #4fc51e;
  color: ${props => props.theme.colorWhite};
  padding: 16px;
  text-align: center;
  border-radius: 5px;

  font-size: 1.5em;
  line-height: 150%;

  &:hover {
    opacity: 0.6;
  }

  @media(max-width: 63.94em) {
    font-size: 1em;
    padding: 10px;
  }

  @media(max-width: 47.94em) {
    font-size: 0.9em;
    padding: 5px 10px;
  }
`;
