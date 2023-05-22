import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${(props) => props.theme.indent};

  @media(max-width: 89.94em) {
    padding: ${(props) => props.theme.indentDesktop};
  }

  @media(max-width: 63.94em) {
    padding: ${(props) => props.theme.indentTablet};
  }

  @media(max-width: 47.94em) {
    padding: ${(props) => props.theme.indentMobile};
  }
`;

export default Container;
