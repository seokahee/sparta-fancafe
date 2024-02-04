import GlobalStyle from "GlobalStyle";
import Home from "./Home";
import CommentList from "components/CommentList";
import CommentModal from "components/CommentModal";
import maengguImg from "../image/member-5.png";
import styled from "styled-components";

function Maenggu({ comments, setComments }) {
  return (
    <div>
      <div>
        <Home />

        <MemberImg src={maengguImg} alt="맹구" />
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

export default Maenggu;

const MemberImg = styled.img`
  position: absolute;
  top: 28%;
  right: 15%;
  width: 16%;
`;
