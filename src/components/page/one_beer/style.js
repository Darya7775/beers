import styled from "styled-components";
import Container from "/src/components/ui/container/Container";
import { Title, Inter500 } from "/src/style/mixins";

export const PageBeerStyle = styled.section`
  width: 100%;
`;

export const PageBeerContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;

  display: grid;
  justify-items: center;
  gap: 20px;

  @media(max-width: 63.94em) {
    gap: 15px;
  }

  @media(max-width: 47.94em) {
    gap: 10px;
  }

  .button {
    width: 50%;

    @media(max-width: 47.94em) {
      width: 100%;
    }
  }
`;

export const PageBeerImg = styled.img`
  height: auto;
`;

export const PageBeerTitle = styled.h2`
  ${Title};
`;

export const PageBeerText = styled.p`
  margin: 0;

  font-size: 1.3em;

  @media(max-width: 63.94em) {
    font-size: 1em;
  }
`;

export const PageBeerSubtutle = styled.h3`
  margin: 0;

  ${Inter500};
  font-size: 1.4em;
  color: #4605ff;

  @media(max-width: 63.94em) {
    font-size: 1.1em;
  }
`;

export const PageBeerListIngredients = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;
