import GlobalStyle from "GlobalStyle";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CommentModal from "./CommentModal";

function CommentList({ comments, setComments }) {
  // 댓글 불러오기
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [setComments]);

  // 게시글 상세보기, 게시물을 담을 스테이트, 모달창 여닫음을 확인하는 스테이트
  const [selectedComment, setSelectedComment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 게시물을 클릭하면 모달창 상태를 변경
  const GetComments = (comments) => {
    setSelectedComment(comments);
    setIsModalOpen(true);
  };

  return (
    <div>
      {comments.map((item) => {
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
      <GlobalStyle />
      <CommentModal
        selectedComment={selectedComment}
        setSelectedComment={setSelectedComment}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        comments={comments}
        setComments={setComments}
      />
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
