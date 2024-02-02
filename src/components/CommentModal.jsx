import { useRef, useState } from "react";
import styled from "styled-components";

function CommentModal({
  selectedComment,
  setSelectedComment,
  isModalOpen,
  setIsModalOpen,
  comments,
  setComments,
}) {
  // 모달창 닫기
  const closeModal = () => {
    setSelectedComment(null);
    setIsModalOpen(false);
  };
  // 게시물 삭제
  const removeComment = (id) => {
    if (window.confirm("게시물을 삭제하시겠습니까?")) {
      alert(`${selectedComment.writedTo}에게 작성된 게시물이 삭제되었습니다.`);
      const deleteComment = comments.filter((item) => item.id !== id);
      localStorage.setItem("comments", JSON.stringify(deleteComment));
      setComments(deleteComment);

      return closeModal();
    }
    alert("삭제를 취소했습니다.");
    return;
  };

  // 수정된 값을 저장하는 스테이트, 수정여부를 확인하는 스테이트
  const [updateComment, setUpdateComment] = useState(null);
  const [isUpdateComment, setIsUpdateComment] = useState(false);

  const updateEl = useRef(null);

  // 텍스트 박스 입력
  const updateText = function (e) {
    return setUpdateComment(e.target.value);
  };

  // 게시물 수정버튼
  const updateContent = () => {
    if (window.confirm("게시물을 수정하시겠습니까?")) {
      setUpdateComment(selectedComment.content);
      setIsUpdateComment(true);
    } else {
      alert("수정을 취소했습니다.");
      return;
    }
  };

  // 수정 완료 버튼
  const updateCompletion = () => {
    if (window.confirm("수정을 완료하시겠습니까?")) {
      if (updateComment.value === "" || updateComment.length === 0) {
        alert("내용을 입력해 주세요");
        updateEl.current.focus();
      } else {
        // 수정된 내용을 스테이트에 저장하고, 로컬스토리지에도 저장
        setSelectedComment({ ...selectedComment, content: updateComment });

        const updatedComments = comments.map((comment) =>
          comment.id === selectedComment.id
            ? { ...comment, content: updateComment }
            : comment
        );
        localStorage.setItem("comments", JSON.stringify(updatedComments));
        setComments(updatedComments);

        // 수정 상태 초기화 및 모달 닫기
        setIsUpdateComment(false);
        return closeModal();
      }
    } else {
      alert("수정을 취소했습니다.");
      return;
    }
  };
  const cancell = () => {
    setIsUpdateComment(false);
    alert("수정을 취소했습니다.");
    return;
  };

  return (
    <div>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalProfile>
              <img src={selectedComment.profileImg} alt="" />

              <div>
                <ModalNickName>{selectedComment.nickName}</ModalNickName>
                <ModalRegDate>{selectedComment.regDate}</ModalRegDate>
              </div>
            </ModalProfile>
            <ModalComment>
              <WritedTo>TO_ {selectedComment.writedTo}</WritedTo>
              {isUpdateComment ? (
                <textarea
                  value={updateComment}
                  onChange={updateText}
                  ref={updateEl}
                  cols="20"
                  rows="5"
                  placeholder="내용을 입력해 주세요"
                ></textarea>
              ) : (
                <div>{selectedComment.content}</div>
              )}
            </ModalComment>
            <Buttons>
              {isUpdateComment ? (
                <DoneBtn>
                  <button onClick={updateCompletion}>수정 완료</button>
                  <button
                    onClick={() => {
                      cancell(false);
                    }}
                  >
                    취소
                  </button>
                </DoneBtn>
              ) : (
                <BtnDiv>
                  <button onClick={() => updateContent(true)}>수정</button>
                  <button
                    onClick={() => {
                      removeComment(selectedComment.id);
                    }}
                  >
                    삭제
                  </button>
                </BtnDiv>
              )}
            </Buttons>
            <CloseBtn onClick={closeModal}>❌</CloseBtn>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default CommentModal;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 4%;
  font-size: 30px;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(2);
    color: red;
    font-weight: 800;
  }
`;

const ModalProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2%;
  align-items: center;
  img {
    width: 30%;
    border-radius: 5px;
  }
`;
const ModalComment = styled.div`
  margin: 3% 0;
  padding: 0 2%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fffcef6b;

  textarea {
    padding: 10px;
    border-radius: 5px;
  }
`;
const ModalNickName = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const ModalRegDate = styled.div`
  margin-top: 3%;
  font-size: 15px;
`;
const WritedTo = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  button {
    width: 20%;
    padding: 1%;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    background-color: #ffe887;

    &:hover {
      cursor: pointer;
      background-color: #eee;
    }
  }
`;
const BtnDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;
const DoneBtn = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;
