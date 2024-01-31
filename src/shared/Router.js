import Cheolsu from "pages/Cheolsu";
import Home from "pages/Home";
import Huni from "pages/Huni";
import Jjanggu from "pages/Jjanggu";
import Maenggu from "pages/Maenggu";
import Yuri from "pages/Yuri";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jjanggu" element={<Jjanggu />} />
        <Route path="cheolsu" element={<Cheolsu />} />
        <Route path="yuri" element={<Yuri />} />
        <Route path="maenggu" element={<Maenggu />} />
        <Route path="huni" element={<Huni />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
