import React from "react";
import Header from "../header";
import Footer from "../footer";
import Authorization from "/src/components/base/authorization";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Authorization />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
