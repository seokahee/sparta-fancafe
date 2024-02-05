import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Members from "pages/Members";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":memberName" element={<Members />} />
        {/* :memberName = : 변수로 선언한다는것 */}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
