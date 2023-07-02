import React from "react";
import Header from "../header";
import Footer from "../footer";
import Authorization from "../authorization";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
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
