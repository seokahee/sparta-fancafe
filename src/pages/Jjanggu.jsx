import React from "react";
import GlobalStyle from "GlobalStyle";
import Home from "./Home";
import JjangguImg from "../image/member-1.png";

function Jjanggu({ comments, setComments }) {
  return (
    <div>
      <div>
        <img src={JjangguImg} alt="짱구" />
      </div>
      <Home />
      <GlobalStyle />;
    </div>
  );
}

// 문제 1. 각 페이지별 경로를 한글로 설정해도 되는가 // 영어로 => 한글로 변경하는 mapper 를 두면 된다.

// 문제 3. 글 입력시 셀렉 대상자에게 게시물이 들어가도록 해야한다 이것을 어찌 해결할 것인가
// Router 에서 State 를 두고, props로 다른 캐릭터들에게도 넘겨주고, 그 다음에 navigation() 써서 다른페이지로 이동하면 상태 유지되는거 보기

export default Jjanggu;
