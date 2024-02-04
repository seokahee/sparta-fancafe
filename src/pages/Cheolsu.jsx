import GlobalStyle from "GlobalStyle";
import Home from "./Home";
import CommentList from "components/CommentList";
import CommentModal from "components/CommentModal";
import cheolsuImg from "../image/member-2.png";
import styled from "styled-components";

function Cheolsu({ comments, setComments }) {
  return (
    <div>
      <div>
        <Home />

        <MemberImg src={cheolsuImg} alt="철수" />
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

export default Cheolsu;

const MemberImg = styled.img`
  position: absolute;
  top: 28%;
  right: 15%;
  width: 16%;
`;
