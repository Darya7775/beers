import styled from "styled-components";
import Container from "/src/components/ui/container";

export const FormStyle = styled.form`
  width: 100%;
`;

export const FormContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(max-width: 63.94em) {
    gap: 15px;
  }

  @media(max-width: 47.94em) {
    gap: 10px;
  }
`;

export const FormButton = styled.button`
  display: block;
  width: 20%;
  border: none;
  background-color: #817abf;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;

  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.7;
  }

  @media(max-width: 63.94em) {
    width: 70%;
  }

  @media(max-width: 47.94em) {
    width: 100%;

    &:hover {
      opacity: 1;
    }
  }
`;
