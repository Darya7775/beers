import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "/src/components/base/layout";
import Main from "/src/components/page/main";
import OneBeer from "/src/components/page/one-beer";
import Basket from "/src/components/page/basket";
import FormPage from "/src/components/page/form-page";
import Login from "/src/components/page/login";
import Profile from "/src/components/page/profile";
import { GlobalStyles } from "./style";
import { GlobalFonts } from "/src/fonts/fonts";
import { fetchCheck } from "/src/features/session-slice";
import ScrollToTop from "/src/components/ui/scroll-to-top";

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      // восстановление сессии
      if(localStorage.getItem("token")) {
        await dispatch(fetchCheck());
      }
    }
    fetch();
  }, [])

  const { pageNumber } = useParams();

  return (
    <HashRouter>
      <GlobalStyles />
      <GlobalFonts />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path={`:${pageNumber}`} element={<Main />} />
          <Route path={"/beers/:id"} element={<OneBeer />} />
          <Route path={"/basket"} element={<Basket />} />
          <Route path={"/form"} element={<FormPage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/"} element={<Navigate replace to={"/page_1"} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
