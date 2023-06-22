import styled from "styled-components";
import Container from "/src/components/ui/container";

export const FormStyle = styled.form`
  width: 100%;
`;

export const FormContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 50px;

  column-count: 2;

  @media(max-width: 63.94em) {
    column-count: 1;
  }

  @media(max-width: 47.94em) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const FormFieldset = styled.fieldset`
  border: none;
  margin: 0 0 20px 0;
  padding: 0;

  display: grid;
  gap: 5px;

  @media(max-width: 47.94em) {
    margin: 0 0 15px 0;
  }
`;

export const FormLegend = styled.legend`
  margin-bottom: 30px;

  @media(max-width: 47.94em) {
    margin-bottom: 20px;
  }
`;

export const FormTextarea = styled.textarea`
  border: 0;
  border-bottom: 2px solid #1a77d2;
  resize: none;

  @media(max-width: 47.94em) {
    height: 100px;
  }
`;

export const FormWrapCheckbox = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media(max-width: 47.94em) {
    font-size: 0.8em;
  }

  input[type="checkbox"] {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;

    white-space: nowrap;

    border: 0;

    clip: rect(0 0 0 0);
    clip-path: inset(100%);
  }

  label {
    padding-left: 36px;

    position: relative;

    cursor: pointer;

    &::before {
      content: "";
      width: 22px;
      height: 22px;

      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid #000000;
    }
  }

  input:checked + label::after {
    content: "";
    width: 10px;
    height: 10px;

    position: absolute;
    left: 6px;
    top: 6px;
    background-color: #2e43a5;
  }
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
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
`;
