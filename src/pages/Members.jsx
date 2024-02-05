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
  const { memberName } = useParams();
  return (
    <div>
      <div>
        <Home comments={comments} setComments={setComments} />

        <MemberImg
          src={membertable[memberName].img}
          alt={membertable[memberName].name}
        />
        <CommentList
          comments={comments}
          setComments={setComments}
          memberName={membertable[memberName].name}
        />
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
