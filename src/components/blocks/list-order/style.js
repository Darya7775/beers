import styled, { css } from "styled-components";

const styleItem = css`
  display: grid;
  grid-template-columns: 40% 30% 30%;
  justify-items: center;
`;

export const WrapTitle = styled.div`
  ${styleItem};

  h4 {
    margin: 0;

    @media(max-width: 47.94em) {
      line-height: 130%;
      margin: 0;
      font-size: 0.9em;
    }
  }
`;

export const ListOrderBeers = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  border: 1px dashed #85c6e6;

  @media(max-width: 47.94em) {
    gap: 5px;
  }
`;

export const ListOrderItem = styled.li`
  ${styleItem};
  align-items: center;
  border-bottom: 1px dashed #85c6e6;

  h3 {
    justify-self: flex-start;

    @media(max-width: 47.94em) {
      padding-bottom: 5px;
      line-height: 130%;
      margin: 0;
      font-size: 0.8em;
    }
  }
`;

export const WrapPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  background-color: #817abf;
  color: #ffffff;

  @media(max-width: 47.94em) {
    padding: 10px;
  }
`;
