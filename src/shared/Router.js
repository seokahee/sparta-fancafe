import Cheolsu from "pages/Cheolsu";
import Home from "pages/Home";
import Huni from "pages/Huni";
import Jjanggu from "pages/Jjanggu";
import Maenggu from "pages/Maenggu";
import Yuri from "pages/Yuri";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import uuid from "react-uuid";

const Router = () => {
  const [comments, setComments] = useState([
    {
      id: uuid(),
      nickName: "채송화",
      profileImg:
        "https://ncache3.ilbe.com/files/attach/new/20220930/14357299/9823166558/11441948187/1d3f10b6fc715fbf540e4b22bdd574c2_11441948199.jpg",
      content:
        "개미는 뚠뚠 오늘도 뚠뚠 열심히~ 일을 하~네 뚠뚠 개미는 뚠뚠 언제나 뚠뚠 열심히~ 일을 하~네",
      writedTo: "짱구",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
        ${now.getMonth() + 1}월
        ${now.getDate()}일
        (${now.getHours()}시
        ${now.getMinutes()}분)`;
        return today;
      })(),
    },
    {
      id: uuid(),
      nickName: "봉미선",
      profileImg:
        "https://i.namu.wiki/i/JW2QBVsoDYd01-PdVQ6Vo_If87Eo9wjc6gitnvDHWJDtjYBkBv5qlc3FqinjqeOaGAPaVwx5w_EZbf2bGmpT4g.webp",
      content:
        "천방지축 어리둥절 빙글빙글 돌아가는 짱구의 하루~ 우리의 짱구는 정말 못말려 (짱구야~)",
      writedTo: "짱구",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
        ${now.getMonth() + 1}월
        ${now.getDate()}일
        (${now.getHours()}시
        ${now.getMinutes()}분)`;
        return today;
      })(),
    },
    {
      id: uuid(),
      nickName: "철수엄마",
      profileImg:
        "https://i.namu.wiki/i/XVdNc1huwiU5ePIkSrUdN-pIdIktHn1W9TvH7s0la0lhMCY9s7E3ketyLQ0mstmmitNbArg4unAnSYgHaTwNqw.webp",
      content: "철수는 학원에 가야지",
      writedTo: "철수",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
          ${now.getMonth() + 1}월
          ${now.getDate()}일
          (${now.getHours()}시
          ${now.getMinutes()}분)`;
        return today;
      })(),
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home comments={comments} setComments={setComments} />}
        />
        <Route
          path="Jjanggu"
          element={<Jjanggu comments={comments} setComments={setComments} />}
        />
        <Route
          path="cheolsu"
          element={<Cheolsu comments={comments} setComments={setComments} />}
        />
        <Route
          path="yuri"
          element={<Yuri comments={comments} setComments={setComments} />}
        />
        <Route
          path="maenggu"
          element={<Maenggu comments={comments} setComments={setComments} />}
        />
        <Route
          path="huni"
          element={<Huni comments={comments} setComments={setComments} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
