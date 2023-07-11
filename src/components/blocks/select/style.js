import styled from "styled-components";
import tick from "../../../assets/green-tick.svg";

export const SelectWrap = styled.div`
  position: relative;

  cursor: pointer;

  &:hover {
    ul {
      display: flex;
    }
  }
`;

export const SelectList = styled.ul`
  display: none;
  flex-direction: column;
  gap: 10px;

  width: max-content;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 2;

  margin: 0;
  padding: 10px 30px 10px 10px;
  list-style: none;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: rgb(213, 209, 234) 0px 6px 18px 0px;
`;

export const SelectItem = styled.li`
  label {
    display: flex;
    align-items: center;
    gap: 10px;

    position: relative;

    cursor: pointer;

    &:hover {
      text-decoration: #000000 solid underline;
    }

    @media(max-width: 47.94em) {
        &:hover {
          text-decoration: none;
      }
    }
  }

  input[type="radio"] {
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

  input:checked + label:before {
    content: "";

    position: absolute;
    top: 50%;
    right: -30px;
    z-index: 3;
    transform:translate(0, -50%);

    width: 25px;
    height: 25px;
    background-image: url(${tick});
    background-repeat: no-repeat;
  }
`;
