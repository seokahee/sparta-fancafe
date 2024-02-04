import GlobalStyle from "GlobalStyle";
import Home from "./Home";
import CommentList from "components/CommentList";
import CommentModal from "components/CommentModal";
import yuriImg from "../image/member-3.png";
import styled from "styled-components";

function Yuri({ comments, setComments }) {
  return (
    <div>
      <div>
        <Home />

        <MemberImg src={yuriImg} alt="유리" />
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

export default Yuri;

const MemberImg = styled.img`
  position: absolute;
  top: 28%;
  right: 15%;
  width: 16%;
`;
