import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "/src/components/app/App";

import { Provider } from "react-redux";
import store from "/src/store";

import { ThemeProvider } from "styled-components";
import { theme } from "/src/components/theme/theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
