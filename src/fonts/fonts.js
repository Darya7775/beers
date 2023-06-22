import { createGlobalStyle } from "styled-components";

import PermanentMarkerWoff from "./permanent-marker-regular.woff";
import PermanentMarkerWoff2 from "./permanent-marker-regular.woff2";

import InterRegularWoff from "./inter-regular.woff";
import InterRegularWoff2 from "./inter-regular.woff2";

import InterMediumWoff from "./inter-medium.woff";
import InterMediumWoff2 from "./inter-medium.woff2";

import InterBlackWoff from "./inter-black.woff";
import InterBlackWoff2 from "./inter-black.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Permanent-Marker";

    font-display: swap;
    src:
      url(${PermanentMarkerWoff2}) format("woff2"),
      url(${PermanentMarkerWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Inter";

    font-display: swap;
    src:
      url(${InterRegularWoff2}) format("woff2"),
      url(${InterRegularWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: "Inter";

    font-display: swap;
    src:
      url(${InterMediumWoff2}) format("woff2"),
      url(${InterMediumWoff}) format("woff");
  }


  @font-face {
    font-style: normal;
    font-weight: 900;
    font-family: "Inter";

    font-display: swap;
    src:
      url(${InterBlackWoff2}) format("woff2"),
      url(${InterBlackWoff}) format("woff");
  }
`;

