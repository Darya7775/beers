import React, {useMemo} from "react";
import useTranslate from "../../../hooks/use-translate";
import Header from "../header";
import Footer from "../footer";
import Authorization from "../authorization";
import Select from "../../blocks/select";
import { optionsLang } from "../../../i18n/data_items";
import { Outlet } from "react-router-dom";
import { LContainer } from "./styled.js";

const Layout: React.FC = () => {

  const {lang, setLang} = useTranslate();

  return (
    <>
      <LContainer>
        <Select options={optionsLang} onChange={setLang} value={lang} />
        <Authorization />
      </LContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
