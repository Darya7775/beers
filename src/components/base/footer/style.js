import styled from "styled-components";
import Container from "/src/components/ui/container";

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: #817abf;
`;

export const ContainerFooter = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;

  color: ${props => props.theme.colorWhite};

  display: grid;
  justify-content: end;
`;
