import React from "react";
import GlobalStyle from "GlobalStyle";
import Home from "./Home";
import CommentList from "components/CommentList";
import CommentModal from "components/CommentModal";
import jjangguImg from "../image/member-1.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Jjanggu({ comments, setComments }) {
  // const navigate = useNavigate();

  return (
    <div>
      <div>
        <Home />

        <MemberImg src={jjangguImg} alt="짱구" />
        {!comments ? (
          <div>등록된 메세지가 없습니다</div>
        ) : (
          <div>
            <CommentList comments={comments} setComments={setComments} />
            <CommentModal comments={comments} setComments={setComments} />
          </div>
        )}
      </div>
      <GlobalStyle />;
    </div>
  );
}

export default Jjanggu;

const MemberImg = styled.img`
  position: absolute;
  top: 28%;
  right: 15%;
  width: 16%;
`;
