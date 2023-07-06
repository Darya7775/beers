import styled from "styled-components"

export const TextAreaStyle = styled.textarea`
  display: block;

  width: 100%;
  height: 76px;

  margin-bottom: 10px;
  padding: 12px 8px 8px;

  box-sizing: border-box;
  border: 1px solid #666666;
  box-shadow: inset 0px 1px 4px rgba(102, 102, 102, 0.1);
  resize: none;

  font-size: 18px;
  line-height: 27px;

  overflow-wrap: break-word;

  &::placeholder {
    font-size: 18px;
    line-height: 27px;
    color: #000000;
  }
`;
