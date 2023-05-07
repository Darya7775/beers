import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/base/layout/Layout";
import Main from "/src/components/page/main/Main";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
