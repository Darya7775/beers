import styled from "styled-components";
import Container from "/src/components/ui/container/Container";

export const BeersSectionStyle = styled.section`
  width: 100%;
`;

export const BeersContainer = styled(Container)`
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const BeersListStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  gap: 30px 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media(max-width: 63.94em) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width: 47.94em) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BeerItemStyle = styled.li`
  display: grid;
  justify-items: center;
`;
