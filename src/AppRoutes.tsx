import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ROUTES } from "./constants";
import Javascript from "./Pages/Javascript";
import ReactJs from "./Pages/Reactjs";
import HtmlAndCss from "./Pages/HtmlAndCss";

function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.JAVASCRIPT} element={<Javascript />} />
      <Route path={ROUTES.REACT_JS} element={<ReactJs />} />
      <Route path={ROUTES.HTML_CSS} element={<HtmlAndCss />} />
    </Routes>
  );
}

export default AppRoutes;
