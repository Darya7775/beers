import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/base/layout/Layout";
import Main from "/src/components/page/main/Main";
import OneBeer from "/src/components/page/one_beer/OneBeer";
import Basket from "/src/components/page/basket/Basket";
import Form from "/src/components/page/form/Form";
import { GlobalStyles } from "./style";
import { GlobalFonts } from "/src/fonts/fonts";

export default function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/beers/:id" element={<OneBeer />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
