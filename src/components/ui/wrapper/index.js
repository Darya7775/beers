import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: ${(props) => props.theme.indent};

  @media(max-width: 89.94em) {
    margin-top: ${(props) => props.theme.indentDesktop};
  }

  @media(max-width: 63.94em) {
    margin-top: ${(props) => props.theme.indentTablet};
  }

  @media(max-width: 47.94em) {
    margin-top: ${(props) => props.theme.indentMobile};
  }
`;

export default Wrapper ;
