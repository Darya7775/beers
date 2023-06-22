import styled from "styled-components";
import Container from "/src/components/ui/container";
import { Title, Inter900 } from "/src/style/mixins";

export const ProfileSection = styled.section`
  width: 100%;
`;

export const ProfileContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ProfileTitle = styled.h2`
  ${Title};

  margin-bottom: 20px;

  @media(max-width: 63.94em) {
    margin-bottom: 10px;
  }

  @media(max-width: 47.94em) {
    margin-bottom: 5px;
  }
`;

export const Text = styled.span`
  ${Inter900};
  font-size: 1.5em;
  line-height: 115%;

  @media(max-width: 63.94em) {
    font-size: 1.3em;
  }

  @media(max-width: 47.94em) {
    font-size: 0.8em;
  }
`;
