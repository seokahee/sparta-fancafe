import React from "react";
import GlobalStyle from "GlobalStyle";
import Home from "./Home";
import CommentList from "components/CommentList";
import jjangguImg from "../image/member-1.png";
import cheolsuImg from "../image/member-2.png";
import yuriImg from "../image/member-3.png";
import maengguImg from "../image/member-4.webp";
import huniImg from "../image/member-5.png";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// 중첩 객체를 만들어서 각 키(path)마다 이미지, 이름을 넣어줌
const membertable = {
  jjanggu: {
    img: jjangguImg,
    name: "짱구",
  },
  cheolsu: {
    img: cheolsuImg,
    name: "철수",
  },
  yuri: {
    img: yuriImg,
    name: "유리",
  },
  maenggu: {
    img: maengguImg,
    name: "맹구",
  },
  huni: {
    img: huniImg,
    name: "훈이",
  },
};

function Members({ comments, setComments }) {
  // Router에서 변수로 선언된 memberName을 table에 접근하는 키로 사용할것이다
  const { memberName } = useParams();
  return (
    <div>
      <div>
        <Home comments={comments} setComments={setComments} />

        <MemberImg
          // 맴버테이블 객체에 [path = jjanggu]의 이미지로 접근하는것
          src={membertable[memberName].img}
          alt={membertable[memberName].name}
        />
        <CommentList
          comments={comments}
          setComments={setComments}
          memberName={membertable[memberName].name}
        />
        {/* 게시물 받는이를 구분하기 위해 테이블의 이름을 프롭스로 전달 */}
      </div>
      <GlobalStyle />
    </div>
  );
}

export default Members;

const MemberImg = styled.img`
  position: absolute;
  top: 28%;
  right: 15%;
  width: 16%;
`;
