import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/app";

import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme/theme";

import {ServicesContext} from "./context";
import Services from "./services";
import config from "./config";

const services = new Services(config);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ServicesContext.Provider value={services}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ServicesContext.Provider>
    </Provider>
  </StrictMode>
);
