import styled from "styled-components";
import Container from "/src/components/ui/container/Container";

export const FooterStyle = styled.footer`
  width: 100%;
`;

export const ContainerFooter = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #817abf;
  color: ${props => props.theme.colorWhite};

  display: grid;
  justify-content: end;
`;
