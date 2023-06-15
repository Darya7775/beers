import React from "react";
import { HashRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "/src/components/base/layout";
import Main from "/src/components/page/main";
import OneBeer from "/src/components/page/one-beer";
import Basket from "/src/components/page/basket";
import Form from "/src/components/page/form";
import { GlobalStyles } from "./style";
import { GlobalFonts } from "/src/fonts/fonts";

export default function App() {

  const { pageNumber } = useParams();

  return (
    <HashRouter>
      <GlobalStyles />
      <GlobalFonts />
      <Routes>
        <Route element={<Layout />}>
          <Route path={`:${pageNumber}`} element={<Main />} />
          <Route path={"/beers/:id"} element={<OneBeer />} />
          <Route path={"/basket"} element={<Basket />} />
          <Route path={"/form"} element={<Form />} />
          <Route path={"/"} element={<Navigate replace to={"/page_1"} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
