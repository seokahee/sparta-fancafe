import { useContext } from "react";
import styled from "styled-components";
import CommentModal from "./CommentModal";
import { CommentContext } from "./context/CommentContext";
import { UpdateContext } from "./context/UpdateContext";

function CommentList({ memberName }) {
  const { comments } = useContext(CommentContext);

  // 게시글 상세보기, 게시물을 담을 스테이트, 모달창 여닫음을 확인하는 스테이트

  const { setSelectedComment, setIsModalOpen } = useContext(UpdateContext);

  // 게시물을 클릭하면 모달창 상태를 변경
  const GetComments = (comments) => {
    setSelectedComment(comments);
    setIsModalOpen(true);
  };
  // 필터 함수를 통해 게시물의 받는이와 멤버 이름이 같은것만 반환
  const filteredComments = comments.filter(
    (comment) => comment.writedTo === memberName
  );
  return (
    <div>
      {/* 필터링된 게시물 배열이 없으면 등록된 메세지가 없음을 띄우고, 배열이 존재하면 null값으로 표기한다 */}
      {filteredComments.length === 0 ? (
        <MsgDiv>등록된 메세지가 없습니다!</MsgDiv>
      ) : null}
      {filteredComments.map((item) => {
        return (
          <ContentsDiv
            key={item.id}
            onClick={() => {
              GetComments(item);
            }}
          >
            <ul>
              <ProfileDiv>
                <img src={item.profileImg} alt="프로필사진" />
                <CommentDiv>
                  <div>
                    <NickName>{item.nickName}</NickName>

                    <RegDate>{item.regDate}</RegDate>
                  </div>
                </CommentDiv>
              </ProfileDiv>
              <ContentLi>{item.content}</ContentLi>
            </ul>
          </ContentsDiv>
        );
      })}
      <CommentModal />
    </div>
  );
}

export default CommentList;

const ContentsDiv = styled.div`
  display: flex;
  width: 22%;
  margin: 0 auto;

  ul {
    width: 100%;
    height: 15vh;
    padding: 2%;
    margin: 3% 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    list-style: none;
    background-color: #ffffffba;
    border-radius: 1rem;
  }

  img {
    width: 20%;
    height: 60px;
    border-radius: 5%;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const ProfileDiv = styled.div`
  display: flex;
  height: 6vh;
  gap: 5%;
`;
const CommentDiv = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NickName = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 3%;
`;
const RegDate = styled.div`
  font-size: 12px;
`;
const ContentLi = styled.div`
  padding: 10px;
  background-color: #fff9df;
  border-radius: 5px;

  white-space: nowrap; /* 텍스트를 한 줄에만 표시 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 줄임표로 표시 */
  max-width: 380px;
`;
const MsgDiv = styled.div`
  width: 24%;
  margin: 0 auto;
  padding: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffdf2;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
`;
