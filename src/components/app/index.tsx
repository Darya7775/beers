import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import useAppDispatch from "../../hooks/use-dispatch";
import Layout from "../base/layout";
import Main from "../page/main";
import OneBeer from "../page/one-beer";
import Basket from "../page/basket";
import FormPage from "../page/form-page";
import Login from "../page/login";
import Profile from "../page/profile";
import { GlobalStyles } from "./style";
import { GlobalFonts } from "../../fonts/fonts";
import { fetchCheck } from "../../features/session-slice";
import ScrollToTop from "../ui/scroll-to-top";

const App: React.FC = () => {

  const dispatch = useAppDispatch();

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
};

export default App;
