import styled from "styled-components";
import Container from "/src/components/ui/container";
import { Title } from "/src/style/mixins";

export const CommentsStyle = styled(Container)`
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const CommentsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CommentsTitle = styled.h2`
  ${Title};

  margin-bottom: 20px;

  @media(max-width: 63.94em) {
    margin-bottom: 10px;
  }

  @media(max-width: 47.94em) {
    margin-bottom: 5px;
  }
`;
