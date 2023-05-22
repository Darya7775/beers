import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body,
  html {
    margin: 0;
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: "Inter", "Arial", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlack};
    scrollbar-color: rgba(44, 171, 21, 0.5) rgba(44, 171, 21, 0.2);
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 10px;
      height: 5px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: rgba(44, 171, 21, 0.2);
      border-radius: 10px;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb:vertical {
      height: 30px;
      background-color: rgba(44, 171, 21, 0.5);
      border-radius: 10px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
  }

  #root {
  position: relative;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header,
  footer {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
`;
