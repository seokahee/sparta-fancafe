import React, { useContext, useRef, useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import user from "../image/user.png";
import { CommentContext } from "./context/CommentContext";

function AddForm() {
  const { comments, setComments } = useContext(CommentContext);

  // 게시물 등록 state
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");

  // 게시물 등록 state별 change이벤트
  const addNickName = (e) => {
    if (nickName.length >= 10) {
      alert("닉네임은 10자 이내로 작성해주세요");
      setNickName("");
      return nickNameEl.current.focus();
    }
    setNickName(e.target.value);
  };
  const addContent = (e) => setContent(e.target.value);
  const handleRecipientChange = (e) => setSelectedRecipient(e.target.value);

  // 포커스 변수들
  const nickNameEl = useRef(null);
  const contentEl = useRef(null);
  const selectedEl = useRef(null);
  const formEl = useRef(null);

  // 게시물 추가
  const addComments = (e) => {
    e.preventDefault();
    const newComments = {
      id: uuid(),
      nickName,
      profileImg: user,
      content,
      writedTo: selectedRecipient,
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
        ${now.getMonth() + 1}월
        ${now.getDate()}일
        (${now.getHours()}시
        ${now.getMinutes()}분)`;
        return today;
      })(),
    };

    if (!nickName) {
      alert("닉네임을 입력해 주세요");
      return nickNameEl.current.focus();
    } else if (!content) {
      alert("내용을 입력해 주세요");
      return contentEl.current.focus();
    } else if (!selectedRecipient) {
      alert("수신자를 선택해 주세요");
      return selectedEl.current.focus();
    }
    alert(`${selectedRecipient}에게 게시글이 등록되었습니다`);

    setComments([...comments, newComments]);

    setNickName("");
    setContent("");
    setSelectedRecipient("");
    return;
  };

  return (
    <div>
      <InputContainer>
        <FormDiv>
          <form onSubmit={addComments} ref={formEl}>
            <label htmlFor="nickName">작성자</label>
            <input
              value={nickName}
              onChange={addNickName}
              ref={nickNameEl}
              type="text"
              id="nickName"
              placeholder="닉네임을 입력해 주세요"
            />
            <label htmlFor="content">내용</label>
            <textarea
              value={content}
              onChange={addContent}
              ref={contentEl}
              id="content"
              cols="10"
              rows="5"
              placeholder="내용을 입력해 주세요"
            ></textarea>
            <SelectDiv>
              <h5>누구에게 보낼까요?</h5>
              <select
                value={selectedRecipient}
                onChange={handleRecipientChange}
                ref={selectedEl}
              >
                <option value="">떡잎마을 방범대!</option>
                <option value="짱구">짱구</option>
                <option value="철수">철수</option>
                <option value="유리">유리</option>
                <option value="맹구">맹구</option>
                <option value="훈이">훈이</option>
              </select>
            </SelectDiv>

            <button type="submit">등록</button>
          </form>
        </FormDiv>
      </InputContainer>
    </div>
  );
}

export default AddForm;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  font-size: 15px;

  form {
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  input {
    padding: 10px;
    border: none;
    border-radius: 1rem;
    margin-bottom: 2%;
  }
  textarea {
    border: none;
    border-radius: 1rem;
    padding: 10px;
  }
  button {
    padding: 5px;
    background-color: #ffc10769;
    margin-bottom: 5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 17px;
    &:hover {
      background-color: #6464641e;
      cursor: pointer;
    }
  }
`;

const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  gap: 5%;

  select {
    width: 30%;
    padding: 5px;
    border-radius: 5px;
  }
`;
