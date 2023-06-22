import styled from "styled-components";

export const StyleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100%;
  min-height: 100%;

  overflow-x: auto;
  background-color: rgba(0,0,0,0.7);
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyleFrame = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;

  padding: 40px;
  position: relative;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 5px 10px rgb(0 0 0 / 5%);
`;
