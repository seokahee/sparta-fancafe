import GlobalStyle from "GlobalStyle";
import Home from "./Home";
import CommentList from "components/CommentList";
import CommentModal from "components/CommentModal";
import huniImg from "../image/member-4.webp";
import styled from "styled-components";

function Huni({ comments, setComments }) {
  return (
    <div>
      <div>
        <Home />

        <MemberImg src={huniImg} alt="훈이" />
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

export default Huni;

const MemberImg = styled.img`
  position: absolute;
  top: 28%;
  right: 15%;
  width: 16%;
`;
